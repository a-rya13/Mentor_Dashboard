import Task from "../models/Task.js";
import User from "../models/User.js";
import Goal from "../models/Goal.js";

/**
 * Create Task
 */
export const createTask = async (req, res) => {
  try {
    const {
      user: userId,
      goal: goalId,
      title,
      description,
      dueDate,
      priority,
    } = req.body;
    if (!userId || !title)
      return res.status(400).json({ message: "user and title are required." });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    if (goalId) {
      const goal = await Goal.findById(goalId);
      if (!goal) return res.status(404).json({ message: "Goal not found." });
    }

    const task = await Task.create({
      user: userId,
      goal: goalId || null,
      title,
      description: description || "",
      dueDate: dueDate ? new Date(dueDate) : null,
      priority: priority || "Medium",
    });

    return res.status(201).json(task);
  } catch (err) {
    console.error("task.createTask:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Get tasks (optional filters: user, goal, status)
 */
export const getTasks = async (req, res) => {
  try {
    const { user, goal, status } = req.query;
    const query = {};
    if (user) query.user = user;
    if (goal) query.goal = goal;
    if (status) query.status = status;

    const tasks = await Task.find(query)
      .populate("user", "name email")
      .populate("goal", "title");
    return res.json(tasks);
  } catch (err) {
    console.error("task.getTasks:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Get single task
 */
export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id)
      .populate("user", "name email")
      .populate("goal", "title");
    if (!task) return res.status(404).json({ message: "Task not found." });
    return res.json(task);
  } catch (err) {
    console.error("task.getTaskById:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Update task
 */
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await Task.findByIdAndUpdate(id, updates, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found." });
    return res.json(task);
  } catch (err) {
    console.error("task.updateTask:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Delete task
 */
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: "Task not found." });
    return res.json({ message: "Task deleted." });
  } catch (err) {
    console.error("task.deleteTask:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
