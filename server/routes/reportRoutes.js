import express from "express";
import {
  generateReport,
  getReports,
  getReportById,
} from "../controllers/reportController.js";

const router = express.Router();

// ✅ Generate a new report (weekly/monthly)
router.post("/", generateReport);

// ✅ Get all reports (optionally filtered by user)
router.get("/", getReports);

// ✅ Get a specific report by ID
router.get("/:id", getReportById);

export default router;
