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
      <div className="mb-6">
        <FileUpload onUpload={(f) => alert(`Uploaded: ${f.name}`)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((n, i) => (
          <NoteCard key={i} {...n} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default NotesPage;
