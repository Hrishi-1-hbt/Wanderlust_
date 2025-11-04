import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can connect this with backend POST /contact route later
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
            Got an Idea? We’ve Got the Skills. Let’s Team Up
          </h1>
          <p className="text-gray-400 text-lg">
            Tell us more about yourself and what you’ve got in mind.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-red-500 mb-6">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                  className="w-full bg-transparent border-b border-gray-500 focus:border-red-500 text-white py-2 focus:outline-none transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-red-500 text-white py-2 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Subject & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your subject"
                  required
                  className="w-full bg-transparent border-b border-gray-500 focus:border-red-500 text-white py-2 focus:outline-none transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                  className="w-full bg-transparent border-b border-gray-500 focus:border-red-500 text-white py-2 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Enter your message here..."
                required
                className="w-full bg-transparent border-b border-gray-500 focus:border-red-500 text-white py-2 resize-none focus:outline-none transition-all duration-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
