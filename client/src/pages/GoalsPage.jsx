import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import GoalCard from "../components/GoalCard";
import { getAllGoals, updateGoal } from "../services/goalService";

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const data = await getAllGoals(user.id);

        setGoals(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching goals:", error);
        setGoals([]);
      }
    };

    fetchGoals();
  }, []);

  // Open Edit Modal
  const handleEditGoal = (goal) => {
    setSelectedGoal(goal);
    setShowModal(true);
  };

  // Save Updated Goal
  const handleUpdateGoal = async () => {
    try {
      await updateGoal(selectedGoal._id, selectedGoal);
      alert("Goal updated successfully!");
      setShowModal(false);
      window.location.reload();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <DashboardLayout title="Goals & Milestones">
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Your Active Goals
          </h1>
          <p className="text-gray-700 mt-2 font-medium">
            Manage your long-term vision with clean milestones.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.length > 0 ? (
            goals.map((g) => (
              <GoalCard
                key={g._id}
                title={g.title}
                deadline={
                  g.deadline
                    ? new Date(g.deadline).toLocaleDateString()
                    : "No deadline"
                }
                progress={g.progress || 0}
                status={g.status || "Pending"}
                onEdit={() => handleEditGoal(g)}
              />
            ))
          ) : (
            <p className="text-gray-600">No goals found.</p>
          )}
        </div>

        {/* PREMIUM EDIT MODAL */}
        {showModal && selectedGoal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white p-7 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
              {/* Modal Header */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                Edit Goal
              </h2>

              {/* Title */}
              <label className="text-sm font-semibold text-gray-800 mb-1 block">
                Title
              </label>
              <input
                type="text"
                className="w-full border border-gray-400 px-3 py-2 rounded-lg bg-white 
        text-gray-900 placeholder-gray-500 focus:border-indigo-600 
        focus:ring-2 focus:ring-indigo-500 transition-all mb-4 shadow-sm"
                value={selectedGoal.title}
                onChange={(e) =>
                  setSelectedGoal({ ...selectedGoal, title: e.target.value })
                }
              />

              {/* Deadline */}
              <label className="text-sm font-semibold text-gray-800 mb-1 block">
                Deadline
              </label>
              <input
                type="date"
                className="w-full border border-gray-400 px-3 py-2 rounded-lg bg-white 
        text-gray-900 placeholder-gray-500 focus:border-indigo-600 
        focus:ring-2 focus:ring-indigo-500 transition-all mb-4 shadow-sm"
                value={
                  selectedGoal.deadline
                    ? new Date(selectedGoal.deadline)
                        .toISOString()
                        .split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  setSelectedGoal({ ...selectedGoal, deadline: e.target.value })
                }
              />

              {/* Progress */}
              <label className="text-sm font-semibold text-gray-800 mb-1 block">
                Progress (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="w-full border border-gray-400 px-3 py-2 rounded-lg bg-white 
        text-gray-900 placeholder-gray-500 focus:border-indigo-600 
        focus:ring-2 focus:ring-indigo-500 transition-all mb-4 shadow-sm"
                value={selectedGoal.progress}
                onChange={(e) =>
                  setSelectedGoal({ ...selectedGoal, progress: e.target.value })
                }
              />

              {/* Status */}
              <label className="text-sm font-semibold text-gray-800 mb-1 block">
                Status
              </label>
              <select
                className="w-full border border-gray-400 px-3 py-2 rounded-lg bg-white 
        text-gray-900 placeholder-gray-500 focus:border-indigo-600 
        focus:ring-2 focus:ring-indigo-500 transition-all mb-6 shadow-sm"
                value={selectedGoal.status}
                onChange={(e) =>
                  setSelectedGoal({ ...selectedGoal, status: e.target.value })
                }
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition-all"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpdateGoal}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 
          to-indigo-700 text-white font-semibold shadow-md hover:brightness-110 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default GoalsPage;
