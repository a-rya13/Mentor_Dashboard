import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import SessionCard from "../components/SessionCard";

const SessionsPage = () => {
  const sessions = [
    {
      topic: "Career Growth Discussion",
      date: "2025-10-30",
      time: "5:00 PM",
      mentor: "Jane Smith",
    },
    {
      topic: "Design Review",
      date: "2025-11-03",
      time: "4:00 PM",
      mentor: "John Doe",
    },
  ];

  return (
    <DashboardLayout title="Mentorship Sessions">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((s, i) => (
          <SessionCard
            key={i}
            {...s}
            onJoin={() => alert("Joining session...")}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default SessionsPage;
