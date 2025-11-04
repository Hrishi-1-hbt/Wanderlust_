import React, { useState, useEffect } from "react";

const TopProperties = ({ listings = [] }) => {
  const [includeGST, setIncludeGST] = useState(false);
  const gstRate = 0.18;

  const formatPrice = (price) =>
    price.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });

  const toggleGST = () => setIncludeGST(!includeGST);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 px-6 md:px-12 py-10">
      <h2 className="text-center text-3xl font-semibold mb-8 text-rose-600 dark:text-white">
        Top Properties
      </h2>

      {/* GST Toggle */}
      <div className="flex justify-end mb-8">
        <div className="flex items-center bg-white dark:bg-neutral-800 shadow-md px-4 py-2 rounded-lg w-60">
          <label className="text-sm text-gray-700 dark:text-gray-300 mr-2">
            Display total after taxes
          </label>
          <input
            type="checkbox"
            checked={includeGST}
            onChange={toggleGST}
            className="w-5 h-5 accent-rose-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => {
          const basePrice = listing.price;
          const totalPrice = basePrice * (1 + gstRate);
          const price = includeGST ? totalPrice : basePrice;
          const gstText = includeGST ? "(incl. GST)" : "(excl. GST)";

          return (
            <a
              href={`/listing/${listing._id}`}
              key={listing._id}
              className="block transform transition-transform hover:scale-[1.02]"
            >
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img
                  src={listing.image?.[0]?.url || "/placeholder.jpg"}
                  alt="listing"
                  className="h-80 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-rose-500 mb-2">
                    {listing.title.length > 26
                      ? listing.title.substring(0, 25) + "..."
                      : listing.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <span className="font-medium">
                      {formatPrice(price)}
                    </span>{" "}
                    / night{" "}
                    <span
                      className={`ml-1 ${
                        includeGST
                          ? "text-red-500"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {gstText}
                    </span>
                  </p>
                  <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 mt-3">
                    <p>
                      <i className="fa-solid fa-location-crosshairs mr-1"></i>
                      {listing.location}, {listing.country}
                    </p>
                    <p className="flex items-center">
                      <i className="fa-solid fa-heart text-rose-500 mr-1"></i>
                      {listing.likes}
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

export default TopProperties;
