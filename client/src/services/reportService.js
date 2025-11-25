import axios from "axios";

const API_URL = "http://localhost:5000/api/reports";

// Get all reports for a user
export const getAllReports = async (userId) => {
  const res = await axios.get(`${API_URL}?user=${userId}`);
  return res.data; // returns array of reports
};

// Generate a new report
export const generateReport = async (userId) => {
  const res = await axios.post(API_URL, { user: userId });
  return res.data;
};

// Get single report
export const getReportById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
