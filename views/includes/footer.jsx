import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully!");
    setShowFeedback(false);
  };

  return (
    <footer
      id="footer"
      className="notranslate w-full bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 py-10 px-6 relative"
    >
      {/* --- Footer Container --- */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Left Section */}
        <div>
          <h3 className="text-3xl font-bold text-pink-600">Wanderlust</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Where adventure meets comfort.
          </p>

          <div className="mt-5 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <i className="fas fa-envelope text-2xl text-black dark:text-gray-200 mr-3"></i>
              <p>
                Need assistance?<br />
                <a
                  href="mailto:supportwanderlust@gmail.com"
                  className="text-pink-500 hover:underline"
                >
                  supportwanderlust@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone text-2xl text-black dark:text-gray-200 mr-3"></i>
              <p>
                Available 24/7<br />
                <a href="tel:+919876543210" className="text-pink-500 hover:underline">
                  +91-0123456789
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Company
          </h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-pink-500">About Us</a></li>
            <li><a href="/privacy" className="hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-pink-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Connect with us
          </h3>
          <div className="flex space-x-4 mb-4 text-2xl">
            <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fab fa-twitter"></i></a>
          </div>

          <button
            onClick={() => setShowFeedback(true)}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg"
          >
            Give your Feedback
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
        © {year} WANDERLUST Private Limited. All rights reserved.
      </div>

      {/* Feedback Popup */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 w-96">
            <h2 className="text-xl font-semibold text-center mb-4 text-pink-600">
              Share Your Wanderlust Experience!
            </h2>

            {/* Feedback Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div className="flex justify-center space-x-1 text-2xl text-yellow-400">
                {[5, 4, 3, 2, 1].map((star) => (
                  <label key={star}>
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      className="hidden"
                    />
                    <span className="cursor-pointer">★</span>
                  </label>
                ))}
              </div>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-400"
              />

              <textarea
                name="comment"
                placeholder="Enter your comment..."
                required
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-400 h-24"
              ></textarea>

              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  onClick={() => setShowFeedback(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
