import Report from "../models/Report.js";
import Task from "../models/Task.js";
import Goal from "../models/Goal.js";

/**
 * Generate a simple report for a user (weekly/monthly)
 * This aggregates counts and stores a Report document.
 */
export const generateReport = async (req, res) => {
  try {
    const { user } = req.body;
    if (!user) return res.status(400).json({ message: "user is required." });

    // Simple aggregates (these can be expanded)
    const goalsCompleted = await Goal.find({
      user,
      status: "Completed",
    }).select("_id");
    const tasksCompleted = await Task.find({
      user,
      status: "Completed",
    }).select("_id");

    const overallProgress = await Goal.aggregate([
      {
        $match: {
          user:
            typeof user === "string"
              ? require("mongoose").Types.ObjectId(user)
              : user,
        },
      },
      { $group: { _id: null, avgProgress: { $avg: "$progress" } } },
    ]);

    const report = await Report.create({
      user,
      title: `Auto-generated report ${new Date().toISOString()}`,
      summary: `Goals completed: ${goalsCompleted.length}, Tasks completed: ${tasksCompleted.length}`,
      goalsAchieved: goalsCompleted.map((g) => g._id),
      tasksCompleted: tasksCompleted.map((t) => t._id),
      overallProgress:
        (overallProgress[0] && overallProgress[0].avgProgress) || 0,
      generatedAt: new Date(),
    });

    return res.status(201).json(report);
  } catch (err) {
    console.error("report.generateReport:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Get reports for a user
 */
export const getReports = async (req, res) => {
  try {
    const { user } = req.query;
    const query = {};
    if (user) query.user = user;

    const reports = await Report.find(query).populate(
      "goalsAchieved tasksCompleted"
    );
    return res.json(reports);
  } catch (err) {
    console.error("report.getReports:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Get single report by id
 */
export const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id).populate(
      "goalsAchieved tasksCompleted"
    );
    if (!report) return res.status(404).json({ message: "Report not found." });
    return res.json(report);
  } catch (err) {
    console.error("report.getReportById:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
