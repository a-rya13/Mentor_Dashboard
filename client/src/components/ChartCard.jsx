import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">
        {title}
      </h3>

      {/* Chart Holder */}
      <div className="h-56 flex items-center justify-center text-gray-500 text-sm font-medium">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
