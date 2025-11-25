// utils/responseHelper.js

// ✅ Standard success response
export const successResponse = (res, message, data = null, status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data, // ✔ THIS must contain array / object
  });
};

export const errorResponse = (res, message, status = 500) => {
  return res.status(status).json({
    success: false,
    message,
  });
};
