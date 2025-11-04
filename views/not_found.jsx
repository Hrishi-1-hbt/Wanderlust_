// views/NotFound.jsx
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] font-sans">
      <div className="flex flex-col items-center bg-gray-100 dark:bg-white shadow-lg rounded-2xl px-10 py-12 text-center">
        <img
          src="/400.png"
          alt="404 Page not found"
          className="h-48 md:h-28 mb-6"
        />
        <h1 className="text-3xl font-semibold text-pink-600 mb-2">
          This page doesn’t exist!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Please check your URL or return to Wanderlust.
        </p>
        <form action="/listing" method="get">
          <button
            type="submit"
            className="px-5 py-2 border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white rounded-md text-sm font-medium transition"
          >
            Go To Homepage
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotFound;
