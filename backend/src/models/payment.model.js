import mongoose from "mongoose";


const paymentSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    amount: Number,
    status: {
        type: String,
        enum: ['pending', 'completed','failed'],
        default: 'pending'    
    },
    paidAT: Date
  }, { timestamps: true}
);

export const Payment = mongoose.model("Payment", paymentSchema)