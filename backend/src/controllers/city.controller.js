import { City } from "../models/city.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getAllCities = asyncHandler(async (req, res) => {
  const cities = await City.find();
  return res.status(200).json(new ApiResponse(200, cities, "Cities fetched"));
});

export const getCityById = asyncHandler(async (req, res) => {
  const city = await City.findById(req.params.id);
  if (!city) throw new ApiError(404, "City not found");
  return res.status(200).json(new ApiResponse(200, city, "City found"));
});
