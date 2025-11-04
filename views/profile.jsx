// views/Profile.jsx
import React from "react";

const Profile = ({ user, profilePic }) => {
  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl transition-colors duration-300">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Welcome, {user.username}!
      </h1>

      {/* Profile Card */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg p-6 md:p-10 space-y-6 md:space-y-0">
        
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-400">
            <img
              src={profilePic ? profilePic : "../profile.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex flex-col items-start md:ml-8 text-gray-700 dark:text-gray-200">
          <p className="text-lg mb-2">
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Username:
            </span>{" "}
            {user.username}
          </p>
          <p className="text-lg mb-6">
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Email ID:
            </span>{" "}
            {user.email}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="/profile/edit"
              className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Edit Profile
            </a>
            <a
              href="/user/updatePass"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Update Password
            </a>
          </div>
        </div>
      </div>

      {/* Upload Profile Picture */}
      <div className="mt-8 text-center">
        <label
          htmlFor="profileUpload"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2.5 rounded-full cursor-pointer transition-colors"
        >
          Upload New Picture
        </label>
        <input type="file" id="profileUpload" className="hidden" />
      </div>
    </div>
  );
};

export default Profile;
