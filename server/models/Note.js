import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // So goal.user is a reference (or “foreign key”) to the User who owns that goal.
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    content: { type: String },
    attachments: [{ type: String }], // local file paths
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
