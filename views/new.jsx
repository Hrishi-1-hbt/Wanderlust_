// views/AddListing.jsx
import React, { useState } from "react";

const AddListing = ({ tags = [] }) => {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const maxFiles = 4;

    if (selectedFiles.length > maxFiles) {
      alert(`Maximum ${maxFiles} images allowed`);
      e.target.value = "";
      setFiles([]);
      setPreview([]);
      return;
    }

    setFiles(selectedFiles);
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreview(previewUrls);
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-full md:w-4/5 lg:w-2/3 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Add your property details
        </h3>

        <form
          method="POST"
          action="/listing"
          encType="multipart/form-data"
          className="space-y-5"
        >
          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
              Title
            </label>
            <input
              name="listing[title]"
              placeholder="Enter title"
              required
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white focus:ring focus:ring-pink-300 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
              Description
            </label>
            <textarea
              name="listing[description]"
              rows="4"
              placeholder="Enter description..."
              required
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white focus:ring focus:ring-pink-300 outline-none"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
              Upload Images
            </label>
            <input
              type="file"
              name="listing[image]"
              multiple
              required
              onChange={handleFileChange}
              className="block w-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 border rounded-md cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">
              You can upload multiple images (Maximum 4)
            </p>

            {/* Preview */}
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              {preview.map((src, index) => (
                <div
                  key={index}
                  className="w-36 h-28 bg-gray-200 dark:bg-gray-600 overflow-hidden rounded-md shadow-md"
                >
                  <img
                    src={src}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Price / Location / Country */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
                Price
              </label>
              <input
                type="number"
                name="listing[price]"
                placeholder="Enter price"
                required
                className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white focus:ring focus:ring-pink-300 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
                Location
              </label>
              <input
                name="listing[location]"
                placeholder="Enter location"
                required
                className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white focus:ring focus:ring-pink-300 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
                Country
              </label>
              <input
                name="listing[country]"
                placeholder="Enter country"
                required
                className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white focus:ring focus:ring-pink-300 outline-none"
              />
            </div>
          </div>

          {/* Tags Section */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <label
                  key={idx}
                  className="flex items-center bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-3xl text-gray-700 dark:text-gray-200 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="listing[tags]"
                    value={tag}
                    className="mr-2"
                  />
                  {tag}
                </label>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Maximum 3 tags are allowed!
            </p>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
