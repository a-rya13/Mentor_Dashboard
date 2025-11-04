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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;
