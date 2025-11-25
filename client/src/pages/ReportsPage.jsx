import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ChartCard from "../components/ChartCard";
import { getAllReports, generateReport } from "../services/reportService";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const data = await getAllReports(user.id);

        setReports(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching reports:", err);
      }
    };

    fetchReports();
  }, []);

  const handleGenerate = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await generateReport(user.id);

    alert("Report generated successfully!");

    window.location.reload();
  };

  return (
    <DashboardLayout title="Reports & Reviews">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Performance Reports
          </h1>
          <p className="text-gray-700 mt-2 font-medium">
            Analyze your mentorship journey and track improvement over time.
          </p>
        </div>

        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Generate Report
        </button>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Section */}
        <ChartCard title="Monthly Performance">[Chart Placeholder]</ChartCard>

        {/* Dynamic Report Cards */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Generated Reports
          </h3>

          {reports.length > 0 ? (
            reports.map((r) => (
              <div
                key={r._id}
                className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all p-5"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {r.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {new Date(r.generatedAt).toLocaleDateString()}
                </p>

                <p className="text-gray-800 leading-relaxed mb-2">
                  {r.summary}
                </p>

                <p className="text-gray-700 font-medium">
                  Overall Progress:{" "}
                  <span className="text-indigo-600 font-bold">
                    {Math.round(r.overallProgress)}%
                  </span>
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  Goals Completed: {r.goalsAchieved.length}
                </p>

                <p className="text-sm text-gray-600">
                  Tasks Completed: {r.tasksCompleted.length}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reports available.</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;
