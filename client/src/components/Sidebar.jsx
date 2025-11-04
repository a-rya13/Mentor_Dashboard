import React from "react";
import { NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react"; // icons for toggle button

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const links = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/goals", label: "Goals" },
    { to: "/tasks", label: "Tasks" },
    { to: "/sessions", label: "Sessions" },
    { to: "/notes", label: "Notes" },
    { to: "/reports", label: "Reports" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <div className="text-2xl font-bold text-blue-600">MentorBoard</div>

          {/* Close button (mobile only) */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-800"
            onClick={toggleSidebar}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col space-y-2 p-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                  isActive ? "bg-blue-100 text-blue-600 font-medium" : ""
                }`
              }
              onClick={() => toggleSidebar && toggleSidebar(false)} // auto-close on mobile
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
