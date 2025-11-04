import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAP_TOKEN; // or pass mapToken prop

const ShowListing = ({ list, currUser, userHasReviewed, mapToken }) => {
  const [gstEnabled, setGstEnabled] = useState(false);
  const gstRate = 0.18;

  useEffect(() => {
    mapboxgl.accessToken = mapToken || import.meta.env.VITE_MAP_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: list.geometry.coordinates,
      zoom: 9,
    });

    new mapboxgl.Marker()
      .setLngLat(list.geometry.coordinates)
      .setPopup(new mapboxgl.Popup().setHTML(`<h4>${list.title}</h4>`))
      .addTo(map);
  }, [list, mapToken]);

  const basePrice = list.price;
  const totalPrice = gstEnabled
    ? (basePrice * (1 + gstRate)).toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      })
    : basePrice.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  const toggleGST = () => setGstEnabled(!gstEnabled);

  return (
    <div className="container mx-auto px-4 mt-10 text-gray-800 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-4 text-center text-rose-500">
          {list.title}
        </h2>

        {/* Image Carousel */}
        <div className="relative w-full overflow-hidden rounded-lg mb-6">
          <div className="flex overflow-x-scroll space-x-3">
            {list.image.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={`Image ${i}`}
                className="w-[400px] h-[300px] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <p>
            <span className="font-semibold">About:</span> {list.description}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {totalPrice} / night{" "}
            <span className="text-sm text-gray-500">
              ({gstEnabled ? "incl. GST" : "excl. GST"})
            </span>
          </p>
          <p>
            <span className="font-semibold">Location:</span> {list.location},{" "}
            {list.country}
          </p>
        </div>

        {/* Owner Info */}
        <div className="mt-4 flex items-center space-x-3">
          <img
            src={
              list.owner?.profilePicture?.purl || "/profile.png"
            }
            alt="Owner"
            className="h-10 w-10 rounded-full border-2 border-rose-500"
          />
          <p className="font-semibold">
            Owned by: {list.owner?.username || "Unknown"}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <form method="POST" action={`/listing/${list._id}/like`}>
            <button
              type="submit"
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              {list.likedBy?.includes(currUser?._id) ? "❤️" : "🤍"}
            </button>
          </form>

          <form method="GET" action={`/listing/${list._id}/booking`}>
            <button className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600">
              Book
            </button>
          </form>

          {currUser && list.owner && currUser._id === list.owner._id && (
            <>
              <form method="GET" action={`/listing/${list._id}/edit`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Edit
                </button>
              </form>
              <form method="POST" action={`/listing/${list._id}?_method=DELETE`}>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                  Delete
                </button>
              </form>
            </>
          )}
        </div>

        {/* GST Toggle */}
        <div className="mt-4 flex justify-end">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={gstEnabled}
              onChange={toggleGST}
              className="h-4 w-4 accent-rose-500"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Display total after taxes
            </span>
          </label>
        </div>

        {/* Map */}
        <div className="mt-8">
          <h3 className="text-xl text-center font-medium mb-3">
            Where you'll be
          </h3>
          <div id="map" className="w-full h-[400px] rounded-lg shadow-md" />
        </div>

        {/* Reviews */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">🌟 Reviews</h3>

          {list.reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {list.reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-md transition hover:scale-[1.01]"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={
                        review.author?.profilePicture?.purl || "/profile.png"
                      }
                      alt="Reviewer"
                      className="h-8 w-8 rounded-full border border-rose-500"
                    />
                    <span className="font-semibold">
                      {review.author?.username || "Anonymous"}
                    </span>
                  </div>
                  <div className="flex mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`fa-star ${
                          star <= review.rating
                            ? "fa-solid text-yellow-400"
                            : "fa-regular text-gray-400"
                        }`}
                      ></i>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {review.Comments?.length > 150
                      ? review.Comments.substring(0, 150) + "..."
                      : review.Comments}
                  </p>
                  <small className="text-xs text-gray-500">
                    Verified by Wanderlust
                  </small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowListing;
