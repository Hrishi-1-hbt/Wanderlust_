import React, { useEffect } from "react";

const ToastMessage = ({ success, error, onClose }) => {
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        onClose(); // auto close toast after 4 seconds
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success, error, onClose]);

  if (!success && !error) return null;

  return (
    <div className="fixed top-5 right-5 z-50 animate-slideIn">
      <div
        className={`w-80 rounded-lg shadow-lg overflow-hidden border ${
          success
            ? "bg-green-100 border-green-400"
            : "bg-red-100 border-red-400"
        }`}
      >
        <div
          className={`flex justify-between items-center px-4 py-2 ${
            success ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          <strong className="me-auto text-sm font-semibold">
            {success ? "Success" : "Error"}
          </strong>
          <small className="text-xs">Just now</small>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 ml-2"
          >
            ✕
          </button>
        </div>
        <div
          className={`px-4 py-3 text-sm font-medium ${
            success ? "text-green-700" : "text-red-700"
          }`}
        >
          {success || error}
        </div>
      </div>
    </div>
  );
};

export default ToastMessage;
