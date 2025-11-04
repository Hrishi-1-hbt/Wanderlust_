// views/AdminUsers.jsx
import React from "react";

const AdminUsers = ({ users = [] }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mt-6 font-[rakkas] text-gray-800 dark:text-gray-100">
        User Management Dashboard
      </h1>

      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg">
          <thead>
            <tr className="bg-[#ff385c] text-white uppercase text-sm tracking-wider">
              <th className="py-3 px-6 text-center">Username</th>
              <th className="py-3 px-6 text-center">Email</th>
              <th className="py-3 px-6 text-center">Role</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <td className="py-3 px-6 text-center font-semibold text-gray-800 dark:text-gray-100">
                    {user.username}
                  </td>
                  <td className="py-3 px-6 text-center text-gray-600 dark:text-gray-300 italic">
                    {user.email}
                  </td>
                  <td className="py-3 px-6 text-center font-bold text-gray-700 dark:text-gray-200">
                    {user.isAdmin ? "Admin" : "User"}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <form
                      action={`/admin/user/${user._id}?_method=DELETE`}
                      method="POST"
                      onSubmit={(e) => {
                        if (!window.confirm("Are you sure you want to delete this user?")) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md transition"
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
