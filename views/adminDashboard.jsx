import React from "react";

const AdminDashboard = ({ listings = [] }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800 font-serif">
        Listings Management Dashboard
      </h1>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-10 bg-red-600 text-white p-3 rounded-lg font-semibold">
        <div className="col-span-2">Title</div>
        <div className="col-span-2">Description</div>
        <div>Price</div>
        <div>Location</div>
        <div>Country</div>
        <div>Reviews</div>
        <div className="col-span-2">Images</div>
        <div>Tags</div>
        <div>Actions</div>
      </div>

      {/* Listings */}
      <div className="mt-4 space-y-4">
        {listings.map((list) => (
          <div
            key={list._id}
            className="grid md:grid-cols-10 grid-cols-1 gap-3 p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition"
          >
            {/* Title + Owner */}
            <div className="col-span-2">
              <div className="font-bold text-gray-800">{list.title}</div>
              <div className="text-sm text-rose-600">
                Owned By:{" "}
                <b>{list.owner?.username ? list.owner.username : "Unknown"}</b>
              </div>
            </div>

            {/* Description */}
            <div className="col-span-2 text-gray-700 line-clamp-4 overflow-hidden text-sm">
              {list.description}
            </div>

            {/* Price */}
            <div className="font-semibold text-gray-800">₹{list.price}</div>

            {/* Location */}
            <div className="italic text-gray-600">{list.location}</div>

            {/* Country */}
            <div className="font-semibold text-gray-700">{list.country}</div>

            {/* Reviews */}
            <div>
              <a
                href={`/admin/reviews/${list._id}`}
                className="bg-gray-700 text-white px-3 py-1.5 rounded-md text-sm hover:bg-gray-800 transition"
              >
                View
              </a>
            </div>

            {/* Images */}
            <div className="col-span-2 flex flex-wrap gap-2">
              {list.image && list.image.length > 0 ? (
                list.image.map((img, i) => (
                  <img
                    key={i}
                    src={img.url}
                    alt={img.filename}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                ))
              ) : (
                <span className="text-gray-500 text-sm">No Images</span>
              )}
            </div>

            {/* Tags */}
            <div>
              {list.tags && list.tags.length > 0 ? (
                list.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md mr-1 mb-1"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-md">
                  No Tags
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
              <form
                action={`/admin/listing/edit/${list._id}`}
                method="GET"
              >
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
                >
                  Edit
                </button>
              </form>

              <form
                action={`/admin/listing/${list._id}?_method=DELETE`}
                method="POST"
                onSubmit={() =>
                  confirm("Are you sure you want to delete this listing?")
                }
              >
                <button
                  type="submit"
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
                >
                  Delete
                </button>
              </form>

              <form action={`/admin/listing/${list._id}`} method="GET">
                <button
                  type="submit"
                  className="bg-cyan-500 text-white px-3 py-1 rounded-md hover:bg-cyan-600 text-sm"
                >
                  View
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Hint */}
      <p className="text-center text-gray-400 text-sm mt-8 md:hidden">
        Scroll horizontally to view full table on mobile
      </p>
    </div>
  );
};

export default AdminDashboard;
