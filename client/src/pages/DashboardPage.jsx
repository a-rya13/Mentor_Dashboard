// import React from "react";
// import DashboardLayout from "../layouts/DashboardLayout";
// import ChartCard from "../components/ChartCard";
// import GoalCard from "../components/GoalCard";
// import SessionCard from "../components/SessionCard";

// const DashboardPage = () => {
//   const goals = [
//     {
//       title: "Launch new campaign",
//       deadline: "2025-11-10",
//       progress: 70,
//       status: "In Progress",
//     },
//     {
//       title: "Update portfolio site",
//       deadline: "2025-12-01",
//       progress: 40,
//       status: "Pending",
//     },
//   ];

//   return (
//     <DashboardLayout title="Dashboard">
//       {/* Goals Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {goals.map((goal, i) => (
//           <GoalCard key={i} {...goal} />
//         ))}
//       </div>

//       {/* Charts and Sessions */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Chart Section */}
//         <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Weekly Progress
//           </h3>
//           <p className="text-gray-600 text-center mt-10 tracking-wide">
//             [Chart Placeholder]
//           </p>
//         </div>

//         {/* Session Section */}
//         <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Weekly Mentor Meetings
//           </h3>
//           <p className="text-gray-700 font-medium mb-2">Arya Agarwal</p>
//           <p className="text-gray-600 mb-4">Sept 30, 2025 • 6:00 PM</p>
//           <button
//             onClick={() => alert("Joining session...")}
//             className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
//           >
//             Join
//           </button>
//         </div>
//       </div>

//       {/* Global Styling for consistency */}
//       {/* <style jsx>{`
//         :global(body) {
//           @apply bg-gray-100 text-gray-900 antialiased;
//         }
//       `}</style> */}
//     </DashboardLayout>
//   );
// };

// export default DashboardPage;

import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import GoalCard from "../components/GoalCard";

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
    <DashboardLayout title="Dashboard Overview">
      {/* Goals Section */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Your Goals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {goals.map((goal, i) => (
          <GoalCard key={i} {...goal} />
        ))}
      </div>

      {/* Charts and Sessions */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chart Section */}
        <div className="bg-white/90 rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Weekly Progress
          </h3>
          <p className="text-gray-600 text-center mt-10 tracking-wide">
            [Chart Placeholder]
          </p>
        </div>

        {/* Session Section */}
        <div className="bg-white/90 rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Weekly Mentor Meetings
          </h3>

          <p className="text-gray-700 font-medium mb-1">Arya Agarwal</p>
          <p className="text-gray-600 mb-4">Sept 30, 2025 • 6:00 PM</p>

          <button
            onClick={() => alert("Joining session...")}
            className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 
            text-white font-semibold rounded-lg shadow-md hover:shadow-lg 
            hover:brightness-110 transition-all duration-200"
          >
            Join Session
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
