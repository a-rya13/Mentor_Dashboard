import Note from "../models/Note.js";
import asyncHandler from "express-async-handler"; // optional helper for cleaner async
import { successResponse, errorResponse } from "../utils/responseHelper.js";

// @desc    Get all notes for a user
// @route   GET /api/notes
// @access  Private
export const getNotes = asyncHandler(async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.user?._id || req.query.userId,
    }).sort({
      createdAt: -1,
    });
    return successResponse(res, "Notes fetched successfully", notes);
  } catch (error) {
    return errorResponse(res, error.message);
  }
});

// @desc    Get single note
// @route   GET /api/notes/:id
// @access  Private
export const getNoteById = asyncHandler(async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return errorResponse(res, "Note not found", 404);
    return successResponse(res, "Note fetched successfully", note);
  } catch (error) {
    return errorResponse(res, error.message);
  }
});

// @desc    Create new note
// @route   POST /api/notes
// @access  Private
export const createNote = asyncHandler(async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return errorResponse(res, "Please provide title and content", 400);

    const note = await Note.create({
      user: req.user?._id || req.body.userId,
      title,
      content,
    });

    return successResponse(res, "Note created successfully", note, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
});

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private
export const updateNote = asyncHandler(async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findById(req.params.id);

    if (!note) return errorResponse(res, "Note not found", 404);

    note.title = title || note.title;
    note.content = content || note.content;

    const updatedNote = await note.save();
    return successResponse(res, "Note updated successfully", updatedNote);
  } catch (error) {
    return errorResponse(res, error.message);
  }
});

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// @access  Private
export const deleteNote = asyncHandler(async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return errorResponse(res, "Note not found", 404);

    await note.deleteOne();
    return successResponse(res, "Note deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
});
