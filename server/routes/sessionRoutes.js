import express from "express";
import {
  getSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
} from "../controllers/sessionController.js";

const router = express.Router();

router.get("/", getSessions);
router.get("/:id", getSessionById);
router.post("/", createSession);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);

export default router;
