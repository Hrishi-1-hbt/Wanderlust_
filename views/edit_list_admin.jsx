import React, { useState, useEffect } from "react";

export default function EditListing({ list, tags, onSubmit }) {
  const [form, setForm] = useState({
    title: list?.title || "",
    description: list?.description || "",
    price: list?.price || "",
    location: list?.location || "",
    country: list?.country || "",
    images: [],
    tags: list?.tags || [],
  });

  const maxTags = 3;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, images: [...e.target.files] });
  };

  const handleTagToggle = (tag) => {
    setForm((prev) => {
      const hasTag = prev.tags.includes(tag);
      if (!hasTag && prev.tags.length >= maxTags) return prev; // limit 3
      return {
        ...prev,
        tags: hasTag ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <div className="container mx-auto max-w-3xl py-10">
      <h3 className="text-3xl font-rakkas text-center mb-6 text-gray-800 dark:text-gray-100">
        Edit Property Details
      </h3>

      <form
        onSubmit={submitHandler}
        className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 space-y-5"
        encType="multipart/form-data"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Title
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 p-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            required
            className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 p-2"
          ></textarea>
        </div>

        {/* Existing Images */}
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
            Existing Images
          </p>
          <div className="flex flex-wrap gap-2">
            {list?.image?.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={img.filename}
                className="h-24 w-24 object-cover rounded-lg border border-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Upload new images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Upload New Images
          </label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
            className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 p-2"
          />
        </div>

        {/* Price, Location, Country */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Price (₹)
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Location
            </label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Country
            </label>
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 p-2"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Tags (max 3)
          </label>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <label key={tag} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={form.tags.includes(tag)}
                  onChange={() => handleTagToggle(tag)}
                  className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {tag}
                </span>
              </label>
            ))}
          </div>
          {form.tags.length >= maxTags && (
            <p className="text-sm text-red-500 mt-1">
              Maximum 3 tags are allowed
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
          >
            Update Listing
          </button>
          <a
            href="/admin/dashboard"
            className="px-5 py-2 rounded-lg bg-gray-400 hover:bg-gray-500 text-white font-semibold"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
