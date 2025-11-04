import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true }, // later encrypted
    role: {
      type: String,
      enum: ["mentor", "mentee"],
      default: "mentee",
    },
    avatar: { type: String, default: "" }, // local file path
    bio: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
