import React from "react";

const Navbar = ({ title, user }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <div className="flex items-center space-x-3">
        <img
          src={user?.avatar || "/default-avatar.png"}
          alt="user"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-gray-700 font-medium">{user?.name}</span>
      </div>
    </div>
  );
};

export default Navbar;
