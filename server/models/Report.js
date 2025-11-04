import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    summary: { type: String },
    goalsAchieved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Goal" }],
    tasksCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    overallProgress: { type: Number, default: 0 },
    generatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);
