// views/PaymentPage.jsx
import React, { useEffect } from "react";

const PaymentPage = ({ booking, totalPrice, razorpayKeyId, razorpayOrder }) => {
  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: razorpayKeyId,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: "Wanderlust Booking",
        description: "Booking Payment",
        order_id: razorpayOrder.id,
        handler: function (response) {
          fetch(`/bookings/payment/confirm/${booking._id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                window.location.href = "/paymentStatus?status=success";
              } else {
                window.location.href = "/paymentStatus?status=failure";
              }
            })
            .catch(() => {
              alert("Payment confirmation failed. Please contact support.");
            });
        },
        prefill: {
          // Add optional user info here
        },
        theme: {
          color: "#ff5031",
        },
      };

      const rzp = new window.Razorpay(options);
      const payButton = document.getElementById("rzp-button");
      if (payButton) {
        payButton.onclick = function (e) {
          e.preventDefault();
          rzp.open();
        };
      }
    };
  }, [booking, razorpayKeyId, razorpayOrder]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 font-[Segoe_UI]">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full text-center p-10 mx-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Complete Payment</h1>

        <p className="text-gray-600 text-base mb-2">
          Booking for:{" "}
          <span className="font-semibold text-gray-800">
            {new Date(booking.bookingDate).toDateString()}
          </span>
        </p>
        <p className="text-gray-600 text-base mb-6">
          Total Amount:{" "}
          <span className="font-semibold text-gray-800">₹{totalPrice}</span>
        </p>

        <form id="payment-form">
          <button
            id="rzp-button"
            className="w-full bg-[#ff5031] hover:bg-[#e24320] text-white font-semibold text-lg py-3 rounded-lg transition-all duration-200"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
