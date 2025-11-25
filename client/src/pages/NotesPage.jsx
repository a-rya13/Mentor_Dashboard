import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import NoteCard from "../components/NoteCard";
import { getAllNotes } from "../services/noteService";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        // protect from null or broken user
        if (!user || !user.id) {
          console.error("User not logged in or missing ID");
          return;
        }

        const data = await getAllNotes(user.id);

        if (Array.isArray(data)) {
          setNotes(data);
        } else {
          console.warn("Notes API did not return an array:", data);
          setNotes([]);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
        setNotes([]);
      }
    };

    fetchNotes();
  }, []);

  return (
    <DashboardLayout title="Notes & Documents">
      {/* Upload Section */}
      <div className="mb-10 bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Upload New Document
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          You can upload meeting notes, mentor feedback, or project reports
          here.
        </p>
      </div>

      {/* Notes Header */}
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
        Recent Notes
      </h2>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes.length > 0 ? (
          notes.map((n) => (
            <NoteCard
              key={n._id}
              title={n.title}
              content={n.content}
              date={new Date(n.createdAt).toLocaleDateString()}
            />
          ))
        ) : (
          <p className="text-gray-600">No notes found.</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default NotesPage;
