import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
     cartId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cart'
     },
     cityId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'City'
     },
     product: String,//eg. "Full Acces","PDF Report"
     price: Number
  }, { timestamps: true}
);

export const CartItem = mongoose.model("CartItem", cartItemSchema)