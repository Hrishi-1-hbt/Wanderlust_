import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";

    if (!formData.email.includes("@")) newErrors.email = "Invalid email";

    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(formData.password))
      newErrors.password =
        "Password must be at least 8 characters and include a letter, number, and symbol.";

    if (formData.password !== formData.cnfPassword)
      newErrors.cnfPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Signup successful!");
        window.location.href = "/login";
      } else {
        alert("Signup failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
      <img
        src="/background.png"
        alt="signup background"
        className="hidden md:block w-[37rem] h-[33rem] blur-sm mr-10"
      />

      <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-rose-600">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="mt-2 w-full p-2 border rounded-md focus:ring-2 focus:ring-rose-400 dark:bg-neutral-800 dark:text-white"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-2 border rounded-md focus:ring-2 focus:ring-rose-400 dark:bg-neutral-800 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full p-2 border rounded-md focus:ring-2 focus:ring-rose-400 dark:bg-neutral-800 dark:text-white"
            />
            <i
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-10 text-gray-500 cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              name="cnfPassword"
              placeholder="Confirm Password"
              value={formData.cnfPassword}
              onChange={handleChange}
              className="mt-2 w-full p-2 border rounded-md focus:ring-2 focus:ring-rose-400 dark:bg-neutral-800 dark:text-white"
            />
            <i
              className={`fa ${showConfirm ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-10 text-gray-500 cursor-pointer`}
              onClick={() => setShowConfirm(!showConfirm)}
            ></i>
            {errors.cnfPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.cnfPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition"
          >
            Sign Up
          </button>

          <a
            href="/listing"
            className="block text-center border border-gray-300 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
          >
            Go Back
          </a>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-rose-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
