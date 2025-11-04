import React from "react";

function Login({ error }) {
  return (
    <html lang="en" className="bg-gray-100">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login - Wanderlust</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-10">
          <img
            className="w-96 h-96 object-cover rounded-xl shadow-md opacity-90 blur-[1px]"
            src="https://private-user-images.githubusercontent.com/157210374/384426294-160a7444-aaf7-49c2-850f-2667eeb2e6f9.png"
            alt="Login background"
          />

          <div className="bg-white dark:bg-neutral-800 shadow-xl rounded-2xl p-8 w-96 transition-transform duration-300 hover:scale-[1.02]">
            <form
              method="POST"
              action="/login"
              noValidate
              className="flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 outline-none dark:bg-neutral-700 dark:text-white"
                  required
                />
                {error === "username" && (
                  <p className="text-red-500 text-sm mt-1">
                    Username not found
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 outline-none dark:bg-neutral-700 dark:text-white"
                    required
                  />
                  <i
                    id="togglePassword"
                    className="fa fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer"
                  ></i>
                </div>
                <div className="mt-2 text-right">
                  <a
                    href="/forgot-password"
                    className="text-sm text-rose-500 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                {error === "password" && (
                  <p className="text-red-500 text-sm mt-1">
                    Password not found
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <button
                  type="submit"
                  className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
                >
                  LOG IN
                </button>
                <a
                  href="/listing"
                  className="text-center bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 rounded-lg transition"
                >
                  Go Back
                </a>
              </div>

              <p className="text-center text-gray-600 dark:text-gray-300 mt-3">
                Don’t have an account?{" "}
                <a
                  href="/signup"
                  className="text-rose-500 font-semibold hover:underline"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Login;
