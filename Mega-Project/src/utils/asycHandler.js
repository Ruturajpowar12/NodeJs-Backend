const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export default asyncHandler;

// const asyncHandler = (req, res, next) => {
//   try {
//     a
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
