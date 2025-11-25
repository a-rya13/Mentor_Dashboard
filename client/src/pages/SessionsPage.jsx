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
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Upcoming Sessions
        </h1>
        <p className="text-gray-700 mt-2 font-medium">
          Manage your scheduled mentorship calls and meetings.
        </p>
      </div>

      {/* Session Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sessions.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {s.topic}
              </h2>
              <p className="text-gray-700 font-medium mb-1">
                <span className="font-semibold text-gray-800">Mentor:</span>{" "}
                {s.mentor}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-800">Date:</span>{" "}
                {s.date}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-gray-800">Time:</span>{" "}
                {s.time}
              </p>
            </div>

            <button
              onClick={() => alert("Joining session...")}
              className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
            >
              Join Session
            </button>
          </div>
        ))}
      </div>

      {/* Global Styling */}
      {/* <style jsx>{`
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
      `}</style> */}
    </DashboardLayout>
  );
};

export default SessionsPage;
