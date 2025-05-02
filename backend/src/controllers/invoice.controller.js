import { Invoice } from "../models/receipt.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getInvoicesByUser = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find({ userId: req.user._id });
  return res.status(200).json(new ApiResponse(200, invoices, "Invoices fetched"));
});
