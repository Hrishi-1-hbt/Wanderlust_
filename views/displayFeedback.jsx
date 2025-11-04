import React from "react";

export default function Feedback({ feedbacks = [] }) {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title */}
      <h3 className="text-center text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-10">
        <span role="img" aria-label="sparkle" className="inline-block mx-2">
          ✨
        </span>
        Valuable Feedbacks by Our Users
        <span role="img" aria-label="sparkle" className="inline-block mx-2">
          ✨
        </span>
      </h3>

      {/* Feedback Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:-translate-y-1 transition-transform duration-200"
          >
            {/* Rating Stars */}
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((j) =>
                j <= feedback.rating ? (
                  <i
                    key={j}
                    className="fa-solid fa-star text-yellow-400 text-xl mx-1 transition-transform hover:scale-125"
                  ></i>
                ) : (
                  <i
                    key={j}
                    className="fa-regular fa-star text-yellow-400 text-xl mx-1 transition-transform hover:scale-125"
                  ></i>
                )
              )}
            </div>

            {/* Comment */}
            <p className="text-gray-700 dark:text-gray-300 text-center font-medium italic mb-3">
              “{feedback.comment}”
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>
                {new Date(feedback.submittedAt).toLocaleDateString("en-IN", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="text-red-500 font-semibold font-serif">
                - {feedback.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
