import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const SettingsPage = () => {
  return (
    <DashboardLayout title="Settings">
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="font-semibold text-gray-800">Profile Settings</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded px-3 py-2 mt-2"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Notifications</h3>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" defaultChecked />
            <span>Email Notifications</span>
          </label>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
