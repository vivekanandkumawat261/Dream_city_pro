import { AccessToken } from "../models/tokens.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const createAccessToken = asyncHandler(async (req, res) => {
  const { cityId } = req.body;
  const token = Math.random().toString(36).substring(2, 10).toUpperCase();

  const accessToken = await AccessToken.create({
    userId: req.user._id,
    cityId,
    token,
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
  });

  return res.status(201).json(new ApiResponse(201, accessToken, "Access token created"));
});
