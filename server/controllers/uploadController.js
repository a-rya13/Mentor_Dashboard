/**
 * uploadController: returns uploaded file metadata.
 * Expects multer middleware (upload.single('file')) to run before this controller.
 *
 * Note: For now files are stored locally (uploads/). Later you can replace this
 * with an S3 upload and return the public URL here.
 */

export const uploadFile = async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "No file uploaded." });

    // Example response: adjust fields as needed
    const fileInfo = {
      filename: req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path, // local path (server relative)
    };

    // Optionally: store file metadata in DB (FileUpload model) — not done here
    return res.status(201).json({ file: fileInfo });
  } catch (err) {
    console.error("upload.uploadFile:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
