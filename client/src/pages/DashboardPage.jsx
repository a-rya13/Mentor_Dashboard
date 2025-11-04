import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import GoalCard from "../components/GoalCard";
import SessionCard from "../components/SessionCard";

const DashboardPage = () => {
  const goals = [
    {
      title: "Launch new campaign",
      deadline: "2025-11-10",
      progress: 70,
      status: "In Progress",
    },
    {
      title: "Update portfolio site",
      deadline: "2025-12-01",
      progress: 40,
      status: "Pending",
    },
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal, i) => (
          <GoalCard key={i} {...goal} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Weekly Progress (Placeholder)">
          <p className="text-gray-400">[Chart Placeholder]</p>
        </ChartCard>
        <SessionCard
          topic="Weekly Mentor Meetings"
          date="Sept 30, 2025"
          time="6:00 PM"
          mentor="Arya Agarwal"
          onJoin={() => alert("Joining session...")}
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
