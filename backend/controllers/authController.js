import User from "../models/user.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

// Register user   =>  /api/v1/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    res.status(400);
  }

  res.status(200).json({
    success: true,
  });
});
