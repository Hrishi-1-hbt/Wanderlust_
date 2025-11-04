import React, { useState } from "react";

const Blogs = ({ blogs = [], currUser }) => {
  const [likes, setLikes] = useState(
    blogs.reduce((acc, blog) => {
      acc[blog._id] = blog.likes || 0;
      return acc;
    }, {})
  );

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
    // Optional: call backend to persist like
    // fetch(`/blogs/${id}/like`, { method: "POST" });
  };

  return (
    <main className="flex flex-col items-center px-4 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-3 font-serif text-gray-800">Travel Stories</h2>
      <p className="text-gray-600 mb-8 text-center">
        Read through amazing travel stories or share your own adventure!
      </p>

      {/* Add Blog Form */}
      <section className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md mb-12">
        <h3 className="text-2xl font-semibold mb-5 text-center font-serif text-blue-600">
          Share Your Story
        </h3>
        <form
          id="blogForm"
          action="/blogs"
          method="POST"
          encType="multipart/form-data"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="blog[title]"
            placeholder="Title"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="blog[location]"
            placeholder="Location"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="blog[content]"
            placeholder="Describe your experience..."
            rows="5"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input
            type="file"
            name="blog[image]"
            accept="image/*"
            className="text-sm text-gray-700"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Post Story
          </button>
        </form>
      </section>

      {/* Blog Posts Section */}
      <div className="flex flex-col items-center gap-8 w-full">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">
              {blog.title}
            </h2>
            <p className="text-gray-700 mb-3">{blog.content}</p>
            <p className="text-sm text-gray-500 mb-1">
              Location: {blog.location}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              Posted by: {blog.blogOwner?.username || "Unknown"}
            </p>

            {/* Blog Images */}
            {blog.images &&
              blog.images.map((img, i) => (
                <img
                  key={i}
                  src={img.imgUrl}
                  alt="Blog"
                  className="w-full rounded-lg mb-4 object-cover max-h-80"
                />
              ))}

            {/* Like and Delete Buttons */}
            <div className="flex justify-between items-center mt-3">
              <button
                onClick={() => handleLike(blog._id)}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
              >
                ❤️ <span>{likes[blog._id]}</span>
              </button>

              {currUser &&
                blog.blogOwner &&
                currUser._id === blog.blogOwner._id && (
                  <form
                    action={`/blogs/${blog._id}?_method=DELETE`}
                    method="POST"
                  >
                    <button
                      type="submit"
                      className="text-sm bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </form>
                )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blogs;
