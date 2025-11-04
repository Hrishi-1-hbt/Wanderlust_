import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Menu } from "lucide-react";

const Navbar = ({ currUser }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left side */}
        <div className="flex items-center space-x-3">
          <Link to="/listing" className="text-rose-500 text-2xl">
            <i className="fa-solid fa-compass fa-2xl" style={{ rotate: "-39deg" }}></i>
          </Link>
          <Link to="/admin/dashboard" className="font-bold hover:text-rose-500">
            Admin Dashboard
          </Link>
        </div>

        {/* Dark mode toggle (mobile) */}
        <button
          onClick={toggleDarkMode}
          className="lg:hidden border rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Moon size={20} />
        </button>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-gray-600 dark:text-gray-200"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>

        {/* Main Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 items-center">
            <li>
              <Link to="/admin/dashboard" className="hover:text-rose-500">
                Manage Listings
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="hover:text-rose-500">
                Manage Users
              </Link>
            </li>
            <li>
              <Link to="/admin/feedbacks" className="hover:text-rose-500">
                Manage Feedbacks
              </Link>
            </li>

            {!currUser ? (
              <>
                <li>
                  <Link to="/signup" className="hover:text-rose-500">
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-rose-500">
                    Log in
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/logout" className="hover:text-rose-500">
                  Log out
                </Link>
              </li>
            )}

            {/* Dark Mode Toggle (Desktop) */}
            <li className="hidden lg:block">
              <button
                onClick={toggleDarkMode}
                className="border rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Moon size={20} />
              </button>
            </li>
          </ul>
        </div>

        {/* Profile dropdown (optional) */}
        <div className="hidden lg:flex items-center space-x-2">
          <i className="fa-solid fa-bars"></i>
          <img
            src={currUser ? "/profilenav.png" : "/noprofilenav.png"}
            alt="profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
