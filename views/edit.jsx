import React, { useState } from "react";

export default function EditListing({ list, tags, onSubmit }) {
  const [form, setForm] = useState({
    title: list?.title || "",
    description: list?.description || "",
    price: list?.price || "",
    location: list?.location || "",
    country: list?.country || "",
    tags: list?.tags || [],
    newImages: [],
    deleteImages: [],
  });

  const maxTags = 3;
  const maxImages = 4;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > maxImages) {
      alert(`You can upload a maximum of ${maxImages} images`);
      return;
    }
    setForm({ ...form, newImages: files });
  };

  const handleTagToggle = (tag) => {
    setForm((prev) => {
      const hasTag = prev.tags.includes(tag);
      if (!hasTag && prev.tags.length >= maxTags) return prev; // prevent over 3
      return {
        ...prev,
        tags: hasTag ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
      };
    });
  };

  const handleDeleteToggle = (filename) => {
    setForm((prev) => {
      const exists = prev.deleteImages.includes(filename);
      return {
        ...prev,
        deleteImages: exists
          ? prev.deleteImages.filter((img) => img !== filename)
          : [...prev.deleteImages, filename],
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-900 shadow-2xl rounded-2xl p-6">
        <h3 className="text-center text-3xl font-semibold mb-6 dark:text-white">
          Edit Property Details
        </h3>

        <form
          onSubmit={submitHandler}
          className="space-y-6"
          encType="multipart/form-data"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-1">
              Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Existing Images */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Existing Images
            </p>
            <div className="flex flex-wrap gap-4">
              {list?.image?.map((img, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-2 rounded-lg"
                >
                  <img
                    src={img.url}
                    alt="listing"
                    className="w-28 h-28 object-cover rounded-md"
                  />
                  <label className="mt-2 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={form.deleteImages.includes(img.filename)}
                      onChange={() => handleDeleteToggle(img.filename)}
                      className="text-red-600 focus:ring-red-500"
                    />
                    Delete
                  </label>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Images preview that are already uploaded.
            </p>
          </div>

          {/* Upload New Images */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-1">
              Upload New Images
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              accept="image/*"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">
              You can upload multiple images (Maximum {maxImages})
            </p>
          </div>

          {/* Price / Location / Country */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-800 dark:text-gray-200 mb-1">
                Price (₹)
              </label>
              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-800 dark:text-gray-200 mb-1">
                Location
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-800 dark:text-gray-200 mb-1">
                Country
              </label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-2">
              Tags (max 3)
            </label>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <label key={tag} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={form.tags.includes(tag)}
                    onChange={() => handleTagToggle(tag)}
                    className="form-checkbox text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    {tag}
                  </span>
                </label>
              ))}
            </div>
            {form.tags.length >= maxTags && (
              <p className="text-sm text-red-500 mt-1">
                Maximum 3 tags are allowed!
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
