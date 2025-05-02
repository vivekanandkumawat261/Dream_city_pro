import mongoose from "mongoose";


const InvoiceSchema = new mongoose.Schema(
  {
     userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
     },
     paymentId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Payment'
     },
     items: 
       [{
         name: String, 
         amount: Number
       }],
     total: Number,
     generatedAt: {
       type: Date,
       default: Date.now
     }
  }, { timestamps: true}
);

export const Invoice = mongoose.model("Invoice", InvoiceSchema)