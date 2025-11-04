import React from "react";

const NoteCard = ({ title, content, date }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{date}</p>
      <p className="text-gray-800 mt-2">{content}</p>
    </div>
  );
};

export default NoteCard;
