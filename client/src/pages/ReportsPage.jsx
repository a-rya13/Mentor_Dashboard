import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import FeedbackCard from "../components/FeedbackCard";
import ChartCard from "../components/ChartCard";

const ReportsPage = () => {
  const feedbacks = [
    {
      mentor: "Arya Agarwal",
      feedback: "Excellent progress this month.",
      rating: 5,
      date: "Sept 30, 2025",
    },
    {
      mentor: "Rahul",
      feedback: "Improve task management consistency.",
      rating: 4,
      date: "Oct 01, 2025",
    },
  ];

  return (
    <DashboardLayout title="Reports & Reviews">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Performance Reports
        </h1>
        <p className="text-gray-700 mt-2 font-medium">
          Analyze your mentorship journey and track improvement over time.
        </p>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Monthly Performance
          </h3>
          <p className="text-gray-700 text-center mt-10 font-medium tracking-wide">
            [Chart Placeholder]
          </p>
        </div>

        {/* Feedback Section */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Mentor Feedback
          </h3>
          {feedbacks.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gray-900 font-semibold text-base">
                  {f.mentor}
                </h4>
                <span className="text-sm text-gray-600">{f.date}</span>
              </div>
              <p className="text-gray-800 mb-2 leading-relaxed">{f.feedback}</p>
              <div className="flex items-center mt-2">
                {Array.from({ length: f.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Styling */}
      <style jsx>{`
        :global(body) {
          @apply bg-gray-100 text-gray-900 antialiased;
        }
        h1,
        h2,
        h3,
        h4 {
          @apply text-gray-900 font-bold;
        }
        p {
          @apply text-gray-800;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default ReportsPage;
