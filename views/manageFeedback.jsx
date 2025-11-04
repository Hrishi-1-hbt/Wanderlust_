import React, { useEffect, useState } from "react";

const AdminFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch all feedbacks from backend API
  useEffect(() => {
    fetch("/admin/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error("Error fetching feedbacks:", err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;

    try {
      const res = await fetch(`/admin/feedbacks/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setFeedbacks((prev) => prev.filter((f) => f._id !== id));
      }
    } catch (err) {
      console.error("Error deleting feedback:", err);
    }
  };

  const handleToggleDisplay = async (id) => {
    try {
      const res = await fetch(`/admin/feedbacks/${id}/toggleDisplay`, {
        method: "POST",
      });
      if (res.ok) {
        setFeedbacks((prev) =>
          prev.map((f) =>
            f._id === id ? { ...f, display: !f.display } : f
          )
        );
      }
    } catch (err) {
      console.error("Error toggling display:", err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Feedback Management
      </h1>

      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No feedbacks found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback) => (
            <div
              key={feedback._id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-center mb-2">
                  <i
                    className={`fa-solid ${
                      feedback.display ? "fa-eye text-green-500" : "fa-eye-slash text-red-500"
                    } text-2xl`}
                  ></i>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-pink-600 dark:text-pink-400 font-semibold">
                    By {feedback.name}
                  </span>
                  <span className="flex items-center text-yellow-500">
                    {feedback.rating}
                    <i className="fa-solid fa-star ml-1"></i>
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  “{feedback.comment}”
                </p>
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                {new Date(feedback.submittedAt).toLocaleDateString("en-IN", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>

              <div className="flex justify-evenly">
                <button
                  onClick={() => handleDelete(feedback._id)}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded-md transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleToggleDisplay(feedback._id)}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded-md transition"
                >
                  {feedback.display ? "Hide" : "Display"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminFeedbacks;
