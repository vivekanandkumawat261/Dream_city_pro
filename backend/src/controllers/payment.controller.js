import { Payment } from "../models/payment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const createPayment = asyncHandler(async (req, res) => {
  const { cartId, amount } = req.body;

  const payment = await Payment.create({
    userId: req.user._id,
    cartId,
    amount,
    status: 'completed',
    paidAT: new Date()
  });

  return res.status(201).json(new ApiResponse(201, payment, "Payment successful"));
});
