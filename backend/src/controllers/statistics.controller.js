import { CityStatistics } from "../models/cityStatistics.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getCityStatistics = asyncHandler(async (req, res) => {
  const stats = await CityStatistics.find({ cityId: req.params.cityId });
  if (!stats.length) throw new ApiError(404, "Statistics not found");
  return res.status(200).json(new ApiResponse(200, stats, "Statistics found"));
});
