import axios from "axios";

const API_URL = "http://localhost:5000/api/goals";

export const getAllGoals = async (userId) => {
  const res = await axios.get(`${API_URL}?user=${userId}`);
  return res.data;
};

export const createGoal = async (goalData) => {
  const res = await axios.post(API_URL, goalData);
  return res.data;
};

export const updateGoal = async (id, updates) => {
  const res = await axios.put(`${API_URL}/${id}`, updates);
  return res.data;
};

export const deleteGoal = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
