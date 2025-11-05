import User from "../models/User.js";

/**
 * Register a new user (mentor or mentee)
 * No hashing or JWT yet — saves plain password for now.
 */
export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role = "mentee",
      bio = "",
      avatar = "",
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required.",
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered." });
    }

    // create new user with plain password
    const user = await User.create({
      name,
      email,
      password, // no hashing yet
      role,
      bio,
      avatar,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("auth.register:", err);
    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};

/**
 * Login user (plain password comparison)
 * No JWT — returns user info if credentials match.
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "Email and password are required.",
      });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials." });

    // Compare plain text passwords
    if (user.password !== password)
      return res.status(401).json({ message: "Invalid credentials." });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("auth.login:", err);
    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};
