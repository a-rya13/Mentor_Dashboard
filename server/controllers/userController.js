// controllers/userController.js
import User from "../models/User.js";
import { successResponse, errorResponse } from "../utils/responseHelper.js";
import { logger } from "../utils/logger.js";

// ✅ Register new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return errorResponse(res, "All fields are required", 400);
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, "User already exists", 400);
    }

    const user = await User.create({ name, email, password, role });

    logger.success(`New user registered: ${user.email}`);
    return successResponse(res, user, "User registered successfully", 201);
  } catch (error) {
    logger.error(`Register User Error: ${error.message}`);
    return errorResponse(res, "Failed to register user", 500, error);
  }
};

// ✅ Login user (simple check for now, JWT later)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, "Email and password are required", 400);
    }

    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse(res, "Invalid credentials", 401);
    }

    // Simple password match (replace with bcrypt later)
    if (user.password !== password) {
      return errorResponse(res, "Invalid credentials", 401);
    }

    // Placeholder for JWT integration
    // const token = generateToken(user._id);

    logger.info(`User logged in: ${user.email}`);
    return successResponse(res, { user }, "Login successful");
  } catch (error) {
    logger.error(`Login Error: ${error.message}`);
    return errorResponse(res, "Failed to login", 500, error);
  }
};

// ✅ Get all users (admin use or dashboard)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return successResponse(res, users, "Users fetched successfully");
  } catch (error) {
    logger.error(`Get Users Error: ${error.message}`);
    return errorResponse(res, "Failed to fetch users", 500, error);
  }
};

// ✅ Get single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) return errorResponse(res, "User not found", 404);

    return successResponse(res, user, "User fetched successfully");
  } catch (error) {
    logger.error(`Get User Error: ${error.message}`);
    return errorResponse(res, "Failed to fetch user", 500, error);
  }
};

// ✅ Update user profile
export const updateUser = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    }).select("-password");

    if (!user) return errorResponse(res, "User not found", 404);

    logger.info(`User updated: ${user.email}`);
    return successResponse(res, user, "User updated successfully");
  } catch (error) {
    logger.error(`Update User Error: ${error.message}`);
    return errorResponse(res, "Failed to update user", 500, error);
  }
};

// ✅ Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return errorResponse(res, "User not found", 404);

    logger.warn(`User deleted: ${user.email}`);
    return successResponse(res, {}, "User deleted successfully");
  } catch (error) {
    logger.error(`Delete User Error: ${error.message}`);
    return errorResponse(res, "Failed to delete user", 500, error);
  }
};
