import React from "react";

const GoalCard = ({ title, deadline, progress, status, onEdit }) => {
  return (
    <div className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Title */}
      <h3 className="font-bold text-xl text-gray-900 tracking-tight">
        {title}
      </h3>

      {/* Deadline */}
      <p className="text-sm text-gray-700 mt-1">
        <span className="font-semibold">Deadline:</span> {deadline}
      </p>

      {/* Progress Section */}
      <div className="mt-5">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-900">Progress</span>
          <span className="text-sm font-semibold text-indigo-700">
            {progress}%
          </span>
        </div>

        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Status */}
      <p className="mt-4 text-sm font-semibold text-gray-900">
        Status:{" "}
        <span
          className={`px-2 py-1 rounded-full text-xs font-bold ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : status === "In Progress"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </p>

      {/* Edit Button */}
      <button
        onClick={onEdit}
        className="mt-5 w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
      >
        Edit Goal
      </button>
    </div>
  );
};

export default GoalCard;
