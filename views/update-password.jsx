import React from "react";

const UpdatePassword = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6 dark:text-white">
        Update Password
      </h1>
      <div className="w-11/12 md:w-8/12 lg:w-1/3 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg transition-all">
        <form
          action="/user/updatePass"
          method="POST"
          className="space-y-5 update_form"
        >
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-gray-800 dark:text-gray-200 mb-2 font-medium"
            >
              Current Password:
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPass"
              placeholder="Enter Current Password"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-gray-800 dark:text-gray-200 mb-2 font-medium"
            >
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPass"
              placeholder="Enter New Password"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-semibold transition"
            >
              Update Password
            </button>
            <a
              href="/profile"
              className="text-center bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-md font-semibold transition"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
