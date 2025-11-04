import React from "react";

const GoalCard = ({ title, deadline, progress, status }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">Deadline: {deadline}</p>
      <div className="mt-2 h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">Status: {status}</p>
    </div>
  );
};

export default GoalCard;
