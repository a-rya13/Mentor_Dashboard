import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const SettingsPage = () => {
  // Alert handler
  const handleSave = () => {
    alert("Your settings have been saved successfully!");
  };

  return (
    <DashboardLayout title="Settings">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Account Settings
        </h1>
        <p className="text-gray-700 mt-2 font-medium">
          Manage your personal preferences and notifications.
        </p>
      </div>

      {/* Settings Form */}
      <div className="space-y-8 max-w-lg bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
        {/* Profile Settings */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Profile Settings
          </h3>
          <input
            type="text"
            placeholder="Full Name"
            className="
              w-full 
              px-4 py-2 
              rounded-lg 
              border border-gray-300 
              bg-gray-100 
              text-gray-900 
              placeholder-gray-500 
              focus:ring-2 
              focus:ring-indigo-500 
              focus:border-indigo-500 
              outline-none 
              transition 
              duration-200
            "
          />
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Notifications
          </h3>
          <label className="flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-all duration-200">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-indigo-600 cursor-pointer"
            />
            <span className="text-gray-800 font-medium">
              Email Notifications
            </span>
          </label>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
        >
          Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
