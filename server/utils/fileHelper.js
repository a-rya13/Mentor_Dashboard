// utils/fileHelper.js
import fs from "fs";
import path from "path";

// Delete file safely
export const deleteFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`🗑️ Deleted file: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error deleting file: ${filePath}`, error);
  }
};

// Get full upload path (for consistency)
export const getUploadPath = (filename) => {
  return path.join(process.cwd(), "uploads", filename);
};
