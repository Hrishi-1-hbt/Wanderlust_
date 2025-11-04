const React = require("react");

function Booking({ list = {}, error, success }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <html>
      <head>
        <title>Book {list.title || "Listing"}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>

      <body className="bg-gray-50 font-sans">
        <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Book {list.title}
          </h1>

          <div className="text-gray-700 space-y-2 mb-4">
            <p>
              <strong>Description:</strong> {list.description}
            </p>
            <p>
              <strong>Price:</strong> ₹{list.price} per day
            </p>
            <p>
              <strong>Location:</strong> {list.location}, {list.country}
            </p>
          </div>

          {error && (
            <p className="text-red-600 font-semibold text-center mb-3">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-600 font-semibold text-center mb-3">
              {success}
            </p>
          )}

          <form
            className="flex flex-col"
            action={`/bookings/my-bookings/${list._id}`}
            method="POST"
          >
            <label
              htmlFor="bookingDate"
              className="font-medium text-gray-700 mt-2 mb-1"
            >
              Select Date:
            </label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              required
              min={today}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <label
              htmlFor="guests"
              className="font-medium text-gray-700 mt-4 mb-1"
            >
              Number of Rooms:
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <label
              htmlFor="duration"
              className="font-medium text-gray-700 mt-4 mb-1"
            >
              Duration (in days):
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              min="1"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button
              type="submit"
              className="mt-6 bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </body>
    </html>
  );
}

module.exports = Booking;
