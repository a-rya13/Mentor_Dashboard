import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const tasks = [
    {
      title: "Write weekly summary",
      dueDate: "2025-10-29",
      priority: "High",
      progress: 60,
    },
    {
      title: "Review mentor notes",
      dueDate: "2025-11-01",
      priority: "Medium",
      progress: 30,
    },
  ];

  return (
    <DashboardLayout title="Tasks">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Task Management
        </h1>
        <p className="text-gray-700 mt-2 font-medium">
          Stay organized and track your daily or weekly action items.
        </p>
      </div>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-gray-900">{task.title}</h2>
              <span
                className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-700"
                    : task.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {task.priority}
              </span>
            </div>

            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-gray-800">Due:</span>{" "}
              {task.dueDate}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div
                className={`h-3 rounded-full ${
                  task.progress < 50
                    ? "bg-yellow-500"
                    : task.progress < 80
                    ? "bg-blue-500"
                    : "bg-green-600"
                }`}
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>

            <p className="text-gray-800 font-medium">
              {task.progress}% Completed
            </p>
          </div>
        ))}
      </div>

      {/* Global Styling */}
      <style jsx>{`
        :global(body) {
          @apply bg-gray-100 text-gray-900 antialiased;
        }
        h1,
        h2,
        h3 {
          @apply text-gray-900 font-bold;
        }
        p {
          @apply text-gray-800;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default TasksPage;
