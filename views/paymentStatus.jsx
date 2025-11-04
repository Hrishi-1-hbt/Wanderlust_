// views/PaymentStatus.jsx
import React from "react";

const PaymentStatus = ({ status }) => {
  const isSuccess = status === "success";

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 font-[Segoe_UI]">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-md text-center">
        <h1
          className={`text-3xl font-bold mb-4 ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {isSuccess ? "Payment Successful" : "Payment Failed"}
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          {isSuccess
            ? "Thank you for your payment."
            : "Unfortunately, your payment was not successful. Please try again."}
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-200"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;
