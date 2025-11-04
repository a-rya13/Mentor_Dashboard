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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Monthly Performance (Placeholder)">
          <p className="text-gray-400">[Chart Placeholder]</p>
        </ChartCard>
        <div className="space-y-4">
          {feedbacks.map((f, i) => (
            <FeedbackCard key={i} {...f} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;
