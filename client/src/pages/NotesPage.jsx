import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import NoteCard from "../components/NoteCard";
import FileUpload from "../components/FileUpload";

const NotesPage = () => {
  const notes = [
    {
      title: "Week 1 Summary",
      content: "Discussed project objectives and timeline.",
      date: "2025-10-20",
    },
    {
      title: "Week 2 Review",
      content: "Reviewed progress and challenges faced.",
      date: "2025-10-27",
    },
  ];

  return (
    <DashboardLayout title="Notes & Documents">
      {/* Upload Section */}
      <div className="mb-10 bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Upload New Document
        </h2>
        <FileUpload onUpload={(f) => alert(`Uploaded: ${f.name}`)} />
        <p className="text-gray-600 mt-2 text-sm">
          You can upload meeting notes, mentor feedback, or project reports
          here.
        </p>
      </div>

      {/* Notes Section */}
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
        Recent Notes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes.map((n, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">{n.title}</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">{n.content}</p>
            <p className="text-sm text-gray-600 font-medium">{n.date}</p>
          </div>
        ))}
      </div>

      {/* Page Styling */}
      <style jsx>{`
        :global(body) {
          @apply bg-gray-100 text-gray-900 antialiased;
        }
        h1,
        h2,
        h3 {
          @apply text-gray-900 font-bold;
        }
        p {
          @apply text-gray-800;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default NotesPage;
