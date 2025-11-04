import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // get error details passed from router state
  const { msg = "Something went wrong", status = 500 } = location.state || {};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-red-100 border border-red-400 text-red-800 rounded-lg shadow-lg p-6 text-center">
        <h3 className="text-2xl font-semibold mb-2">{msg}!</h3>
        <p className="text-sm mb-4">Status Code: {status}</p>
        <button
          onClick={() => navigate("/listing")}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
