import React from "react";

const NoteCard = ({ title, content, date }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{date}</p>
      <p className="text-gray-800 mt-2 leading-relaxed">{content}</p>
    </div>
  );
};

export default NoteCard;
