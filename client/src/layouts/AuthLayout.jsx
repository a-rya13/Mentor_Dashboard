import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Brand or logo placeholder */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-indigo-600">
            Mentor Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Welcome! Please sign in to continue.
          </p>
        </div>

        {/* Render the children (Login/Register) */}
        {children || <Outlet />}
      </div>
    </div>
  );
};

export default AuthLayout;
