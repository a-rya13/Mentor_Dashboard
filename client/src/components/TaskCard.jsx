import React from "react";
import ProgressBar from "./ProgressBar";

const TaskCard = ({ title, dueDate, priority, progress }) => {
  const colors = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-green-600",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">Due: {dueDate}</p>
      <p className={`text-sm mt-1 ${colors[priority]}`}>Priority: {priority}</p>
      <div className="mt-3">
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default TaskCard;
