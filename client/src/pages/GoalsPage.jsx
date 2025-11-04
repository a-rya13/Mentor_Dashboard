import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import GoalCard from "../components/GoalCard";

const GoalsPage = () => {
  const goals = [
    {
      title: "Design new marketing plan",
      deadline: "2025-11-25",
      progress: 50,
      status: "In Progress",
    },
    {
      title: "Complete mentor feedback",
      deadline: "2025-12-05",
      progress: 20,
      status: "Pending",
    },
  ];

  return (
    <DashboardLayout title="Goals & Milestones">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal, i) => (
          <GoalCard key={i} {...goal} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default GoalsPage;
