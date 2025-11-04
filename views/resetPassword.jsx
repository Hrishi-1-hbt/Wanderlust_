// views/ResetPassword.jsx
import React, { useState } from "react";

const ResetPassword = ({ token }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Reset Your Password
      </h1>

      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
        <form
          action={`/resetPassword/${token}?_method=PATCH`}
          method="POST"
          id="resetPasswordForm"
          className="space-y-6"
        >
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
            >
              New Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter New Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm New Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-md font-medium transition-colors"
            >
              Reset Password
            </button>
            <a
              href="/forgot-password"
              className="flex-1 text-center bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-md font-medium transition-colors"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
