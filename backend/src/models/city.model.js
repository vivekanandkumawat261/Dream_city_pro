import mongoose from "mongoose";


const citySchema = new mongoose.Schema(
  {
    name: String,
    region: String,
    department: String,
    postalCode: String,
    bookingFee: String,
    inseeCode: String
  }, { timestamps: true}
);

export const City = mongoose.model("City", citySchema)