import React from "react";

const AdminListing = ({ list }) => {
  if (!list) return null;

  return (
    <div className="container mx-auto my-10 p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2">
        {list.title}
      </h1>

      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <p>
          <strong className="font-semibold text-gray-900 dark:text-gray-100">
            Description:
          </strong>{" "}
          {list.description}
        </p>
        <p>
          <strong className="font-semibold text-gray-900 dark:text-gray-100">
            Price:
          </strong>{" "}
          ₹{list.price}
        </p>
        <p>
          <strong className="font-semibold text-gray-900 dark:text-gray-100">
            Location:
          </strong>{" "}
          {list.location}, {list.country}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {list.image &&
          list.image.map((img, index) => (
            <div key={index} className="w-full">
              <img
                src={img.url}
                alt={img.filename}
                className="w-full h-72 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            </div>
          ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-8">
        <a
          href={`/admin/reviews/${list._id}`}
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          View Reviews
        </a>
      </div>
    </div>
  );
};

export default AdminListing;
