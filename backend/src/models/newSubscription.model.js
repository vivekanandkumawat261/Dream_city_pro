import mongoose from "mongoose";


const NewsletterSubscriberSchema = new mongoose.Schema(
  {
     email: {
       type: String, 
       unique: true
     },
     subscribedAt: {
       type: Date,
       default:Date.now
     }
  }, { timestamps: true}
);

export const NewsletterSubscriber = mongoose.model("NewsletterSubscriber", NewsletterSubscriberSchema)