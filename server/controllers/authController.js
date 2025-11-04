import bcrypt from "bcryptjs";
import User from "../models/User.js";

/**
 * Register a new user (mentor or mentee)
 * Note: no JWT yet — this creates the user and returns basic info.
 */
export const register = async (req, res) => {
  try {
    const { name, email, password, role = "mentee", bio = "" } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email and password are required." });
    }

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Email already registered." });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashed,
      role,
      bio,
      avatar: req.body.avatar || "",
    });

    // Do not return password hash
    return res
      .status(201)
      .json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
  } catch (err) {
    console.error("auth.register:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Simple login (no JWT). Returns basic user info after verifying password.
 * Later: replace with JWT generation.
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password are required." });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials." });

    // Later: attach JWT token
    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("auth.login:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
