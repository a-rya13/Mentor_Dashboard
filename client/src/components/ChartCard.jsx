import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="h-56 flex items-center justify-center">{children}</div>
    </div>
  );
};

export default ChartCard;
