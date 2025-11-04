import Goal from "../models/Goal.js";
import User from "../models/User.js";

/**
 * Create a new goal
 */
export const createGoal = async (req, res) => {
  try {
    const { user: userId, title, description, deadline, mentor } = req.body;

    // Basic validation
    if (!userId || !title) {
      return res.status(400).json({ message: "user and title are required." });
    }

    // Optional: validate user exists
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    const goal = await Goal.create({
      user: userId,
      title,
      description: description || "",
      deadline: deadline ? new Date(deadline) : null,
      mentor: mentor || null,
    });

    return res.status(201).json(goal);
  } catch (err) {
    console.error("goal.createGoal:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Get all goals (optionally filter by user)
 */
export const getGoals = async (req, res) => {
  try {
    const { user } = req.query;
    let query = {};
    if (user) query.user = user;

    const goals = await Goal.find(query)
      .populate("user", "name email")
      .populate("mentor", "name email");
    return res.json(goals);
  } catch (err) {
    console.error("goal.getGoals:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Get single goal by id
 */
export const getGoalById = async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await Goal.findById(id)
      .populate("user", "name email")
      .populate("mentor", "name email");
    if (!goal) return res.status(404).json({ message: "Goal not found." });
    return res.json(goal);
  } catch (err) {
    console.error("goal.getGoalById:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Update goal
 */
export const updateGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const goal = await Goal.findByIdAndUpdate(id, updates, { new: true });
    if (!goal) return res.status(404).json({ message: "Goal not found." });

    return res.json(goal);
  } catch (err) {
    console.error("goal.updateGoal:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Delete goal
 */
export const deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await Goal.findByIdAndDelete(id);
    if (!goal) return res.status(404).json({ message: "Goal not found." });
    return res.json({ message: "Goal deleted." });
  } catch (err) {
    console.error("goal.deleteGoal:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
