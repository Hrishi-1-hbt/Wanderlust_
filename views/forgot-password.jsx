import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: "error", text: "Please enter your registered email." });
      return;
    }

    try {
      const res = await fetch("/resetlink-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage({
          type: "success",
          text: "Reset link has been sent to your registered email!",
        });
      } else {
        setMessage({ type: "error", text: "Email not found. Please try again." });
      }
    } catch {
      setMessage({ type: "error", text: "Server error. Please try again later." });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 transition">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h2 className="text-center text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 dark:text-gray-200 mb-2 font-medium"
            >
              Registered Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>

          {message.text && (
            <div
              className={`p-3 rounded-md text-sm ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="flex flex-col space-y-3">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
            >
              Send
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition"
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
