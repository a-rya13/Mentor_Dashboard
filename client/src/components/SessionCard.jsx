import React from "react";

const SessionCard = ({ topic, date, time, mentor, onJoin }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="font-semibold text-lg">{topic}</h3>
      <p className="text-sm text-gray-600">{mentor}</p>
      <p className="text-sm text-gray-500 mt-1">
        {date} • {time}
      </p>
      <button
        onClick={onJoin}
        className="mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Join
      </button>
    </div>
  );
};

export default SessionCard;
