import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
      {/* 404 Box */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition-all duration-300">
        <h1 className="text-6xl font-extrabold text-blue-700 mb-3">404</h1>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Oops! Page not found
        </p>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-sm transition-colors duration-200"
        >
          Go back to Home
        </a>
      </div>

      {/* Global Styling */}
      <style jsx>{`
        :global(body) {
          @apply bg-gray-100 text-gray-900 antialiased;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
