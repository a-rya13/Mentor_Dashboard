import axios from "axios";

const API_URL = "http://localhost:5000/api/notes";

// Fetch notes for a user
export const getAllNotes = async (userId) => {
  if (!userId) return [];

  const res = await axios.get(`${API_URL}?userId=${userId}`);

  // backend returns { success, message, data }
  return res.data.data || [];
};

// Create note
export const createNote = async (noteData) => {
  const res = await axios.post(API_URL, noteData);
  return res.data.data;
};

// Update note
export const updateNote = async (id, updates) => {
  const res = await axios.put(`${API_URL}/${id}`, updates);
  return res.data.data;
};

// Delete note
export const deleteNote = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data.message;
};
