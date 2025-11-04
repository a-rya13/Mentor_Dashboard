import Session from "../models/Session.js";
import User from "../models/User.js";

/**
 * Create session (booking)
 * Placeholder: create meetingLink via integrations.createMeeting(...) later
 */
export const createSession = async (req, res) => {
  try {
    const { mentor, mentee, title, description, date } = req.body;
    if (!mentor || !mentee || !date || !title) {
      return res
        .status(400)
        .json({ message: "mentor, mentee, date and title are required." });
    }

    // Validate users
    const m1 = await User.findById(mentor);
    const m2 = await User.findById(mentee);
    if (!m1 || !m2)
      return res.status(404).json({ message: "Mentor or mentee not found." });

    // TODO: integrate 3rd party meeting creation (Zoom/Google Meet) here and set meetingLink
    const session = await Session.create({
      mentor,
      mentee,
      title,
      description: description || "",
      date: new Date(date),
      meetingLink: req.body.meetingLink || "",
    });

    return res.status(201).json(session);
  } catch (err) {
    console.error("session.createSession:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Get sessions (filter by mentor/mentee via query)
 */
export const getSessions = async (req, res) => {
  try {
    const { mentor, mentee } = req.query;
    const query = {};
    if (mentor) query.mentor = mentor;
    if (mentee) query.mentee = mentee;

    const sessions = await Session.find(query)
      .populate("mentor", "name email")
      .populate("mentee", "name email");
    return res.json(sessions);
  } catch (err) {
    console.error("session.getSessions:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Get single session
 */
export const getSessionById = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findById(id).populate(
      "mentor mentee",
      "name email"
    );
    if (!session)
      return res.status(404).json({ message: "Session not found." });
    return res.json(session);
  } catch (err) {
    console.error("session.getSessionById:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Update session (status, feedback, meetingLink)
 */
export const updateSession = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const session = await Session.findByIdAndUpdate(id, updates, { new: true });
    if (!session)
      return res.status(404).json({ message: "Session not found." });
    return res.json(session);
  } catch (err) {
    console.error("session.updateSession:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/**
 * Delete session
 */
export const deleteSession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findByIdAndDelete(id);
    if (!session)
      return res.status(404).json({ message: "Session not found." });
    return res.json({ message: "Session deleted." });
  } catch (err) {
    console.error("session.deleteSession:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
