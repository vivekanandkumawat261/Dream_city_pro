import mongoose from "mongoose";


const cartSchema = new mongoose.Schema(
  {
    userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
    },
    createdAt: {
         type: Date,
         default: Date.now
    },
    updatedAt: {
         type: Date,
         default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'checked_out',"abandoned"],
        default: 'active'
    }
  }, { timestamps: true}
);

export const Cart = mongoose.model("Cart", cartSchema)