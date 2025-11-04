// utils/responseHelper.js

// ✅ Standard success response
export const successResponse = (
  res,
  data = {},
  message = "Success",
  status = 200
) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

// ❌ Standard error response
export const errorResponse = (
  res,
  message = "Server Error",
  status = 500,
  error = null
) => {
  return res.status(status).json({
    success: false,
    message,
    error: error ? error.toString() : undefined,
  });
};
