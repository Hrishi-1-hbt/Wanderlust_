// views/Listings.jsx
import React, { useEffect, useState } from "react";

const Listings = ({ results = [] }) => {
  const [showGST, setShowGST] = useState(false);
  const gstRate = 0.18;

  const toggleGST = () => {
    setShowGST((prev) => !prev);
  };

  const formatPrice = (price) =>
    price.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });

  return (
    <div className="px-4 py-8">
      {/* GST Toggle Section */}
      <div className="flex justify-end mb-10">
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg shadow-sm w-fit">
          <input
            type="checkbox"
            id="gstToggle"
            checked={showGST}
            onChange={toggleGST}
            className="w-5 h-5 accent-pink-600 cursor-pointer"
          />
          <label
            htmlFor="gstToggle"
            className="text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
          >
            Display total after taxes
          </label>
        </div>
      </div>

      {/* Listing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((listing) => {
          const basePrice = listing.price;
          const totalPrice = basePrice * (1 + gstRate);
          const displayPrice = showGST ? totalPrice : basePrice;

          return (
            <a
              key={listing._id}
              href={`/listing/${listing._id}`}
              className="block transform transition-transform hover:scale-[1.01] hover:-translate-y-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={listing.image?.[0]?.url || "/default.jpg"}
                  alt={listing.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-pink-600 mb-2">
                    {listing.title.length > 26
                      ? `${listing.title.substring(0, 25)}...`
                      : listing.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <span>{formatPrice(displayPrice)}</span> / night{" "}
                    <span
                      className={`text-sm ${
                        showGST
                          ? "text-red-500"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {showGST ? "(incl. GST)" : "(excl. GST)"}
                    </span>
                  </p>

                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <p>
                      <i className="fa-solid fa-location-crosshairs text-gray-500"></i>{" "}
                      {listing.location}, {listing.country}
                    </p>
                    <p className="flex items-center gap-1">
                      <i className="fa-solid fa-heart text-pink-500"></i>
                      <span>{listing.likes}</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Listings;
