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
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Your Active Goals
        </h1>
        <p className="text-gray-700 mt-2 font-medium">
          Stay on track and manage your key milestones effectively.
        </p>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {goals.map((goal, i) => (
          <GoalCard key={i} {...goal} />
        ))}
      </div>

      {/* Global Styles */}
      <style jsx>{`
        :global(body) {
          @apply bg-gray-100 text-gray-900 antialiased;
        }
        h1,
        h2,
        h3 {
          @apply text-gray-900 font-bold;
        }
        p,
        span {
          @apply text-gray-800;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default GoalsPage;
