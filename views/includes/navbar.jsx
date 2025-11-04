import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currUser, profilePic }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-rose-500 text-2xl font-bold flex items-center space-x-2">
            <i className="fa-solid fa-compass rotate-[-39deg]" />
          </Link>
          <Link
            to="/listing"
            className="text-lg font-semibold text-gray-800 dark:text-gray-100 tracking-wide"
          >
            WANDERLUST
          </Link>
        </div>

        {/* Search Bar */}
        <form
          action="/listing/search"
          method="post"
          className="hidden md:flex items-center border border-gray-300 dark:border-gray-700 rounded-full overflow-hidden mx-4 w-1/3"
        >
          <input
            type="search"
            name="query"
            placeholder="Search here..."
            className="flex-grow px-3 py-2 outline-none bg-transparent text-sm dark:text-gray-200"
          />
          <button
            type="submit"
            className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-2"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              to="/listing/new"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500"
            >
              Show your Space
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500"
            >
              Feedbacks
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500"
            >
              Blogs
            </Link>
          </li>

          {/* Dark mode toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-200 hover:text-rose-500"
            >
              {darkMode ? (
                <i className="bx bx-sun text-xl"></i>
              ) : (
                <i className="bx bxs-moon text-xl"></i>
              )}
            </button>
          </li>

          {/* Profile dropdown */}
          <li className="relative group">
            <button className="flex items-center space-x-2">
              <i className="fa-solid fa-bars text-lg text-gray-600 dark:text-gray-200"></i>
              <img
                src={
                  currUser
                    ? profilePic || "/profile.png"
                    : "/noprofilenav.png"
                }
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border"
              />
            </button>

            <ul className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg hidden group-hover:block w-40">
              {!currUser ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <i className="fa-solid fa-right-to-bracket text-rose-500 mr-2"></i>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <i className="fa-solid fa-user-plus mr-2"></i>
                      Signup
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <i className="fa-solid fa-user mr-2"></i>
                      Your Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <i className="fa-solid fa-right-from-bracket text-red-500 mr-2"></i>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-4">
          <ul className="space-y-3">
            <li><Link to="/listing/new" className="block text-gray-700 dark:text-gray-200">Show your Space</Link></li>
            <li><Link to="/about" className="block text-gray-700 dark:text-gray-200">About Us</Link></li>
            <li><Link to="/contact" className="block text-gray-700 dark:text-gray-200">Contact Us</Link></li>
            <li><Link to="/feedback" className="block text-gray-700 dark:text-gray-200">Feedbacks</Link></li>
            <li><Link to="/blogs" className="block text-gray-700 dark:text-gray-200">Blogs</Link></li>
            {!currUser ? (
              <>
                <li><Link to="/login" className="block text-gray-700 dark:text-gray-200">Login</Link></li>
                <li><Link to="/signup" className="block text-gray-700 dark:text-gray-200">Signup</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/profile" className="block text-gray-700 dark:text-gray-200">Your Profile</Link></li>
                <li><Link to="/logout" className="block text-gray-700 dark:text-gray-200">Logout</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
