import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-5xl font-bold text-blue-600">404</h1>
      <p className="text-gray-600 mt-2">Page not found</p>
      <a href="/" className="mt-4 text-blue-600 hover:underline text-sm">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
