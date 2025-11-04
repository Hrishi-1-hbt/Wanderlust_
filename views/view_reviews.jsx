import React from "react";

const AdminListingDetails = ({ list }) => {
  if (!list) return null;

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-5">
        {list.title}
      </h1>

      {/* Details */}
      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <p>
          <strong className="font-semibold dark:text-gray-100">Description:</strong>{" "}
          {list.description}
        </p>
        <p>
          <strong className="font-semibold dark:text-gray-100">Price:</strong> ₹
          {list.price}
        </p>
        <p>
          <strong className="font-semibold dark:text-gray-100">Location:</strong>{" "}
          {list.location}, {list.country}
        </p>

        {/* Tags */}
        <div className="mt-3">
          {list.tags && list.tags.length > 0 ? (
            list.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="inline-block bg-gray-400 text-white text-sm px-3 py-1 rounded-full">
              No Tags
            </span>
          )}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {list.image &&
          list.image.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={img.filename}
              className="w-full h-72 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          ))}
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-5">
          Reviews
        </h2>

        {list.reviews && list.reviews.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border dark:border-gray-700 text-left">Review</th>
                  <th className="px-4 py-2 border dark:border-gray-700 text-left">Rating</th>
                  <th className="px-4 py-2 border dark:border-gray-700 text-left">Owner</th>
                  <th className="px-4 py-2 border dark:border-gray-700 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.reviews.map((review, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="px-4 py-2">{review.Comments}</td>
                    <td className="px-4 py-2 font-semibold">{review.rating}</td>
                    <td className="px-4 py-2 italic text-yellow-500">{review.author.username}</td>
                    <td className="px-4 py-2">
                      <form
                        action={`/admin/listing/${list._id}/reviews/${review._id}?_method=DELETE`}
                        method="POST"
                        onSubmit={(e) => {
                          if (!window.confirm("Are you sure you want to delete this listing Review?"))
                            e.preventDefault();
                        }}
                      >
                        <button
                          type="submit"
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm font-medium"
                        >
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center italic text-gray-500 dark:text-gray-400">
            No reviews available for this listing.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminListingDetails;
