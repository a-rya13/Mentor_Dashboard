import React from "react";

const FeedbackCard = ({ mentor, rating, feedback, date }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h4 className="font-semibold text-gray-800 mb-1">{mentor}</h4>
      <p className="text-sm text-gray-600 mb-2">{date}</p>
      <p className="text-gray-700 mb-2">{feedback}</p>
      <p className="text-yellow-500">⭐ {rating}/5</p>
    </div>
  );
};

export default FeedbackCard;
