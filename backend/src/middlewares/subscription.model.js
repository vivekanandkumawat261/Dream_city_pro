import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
   subscriber: {
    type: Schema.Types.ObjectId, //one who is subscribing
    ref: "User"  
   },
   channel: {
    type: Schema.Types.ObjectId, //one to whom 'subscriber' is subscribing 
    ref: "User"
   }

}, {timestamps: true})


// Prevent duplicate subscriptions
subscriptionSchema.index({ subscriber: 1, channel: 1 }, { unique: true });

// Prevent self-subscription
subscriptionSchema.pre("save", function (next) {
  if (this.subscriber.equals(this.channel)) {
    return next(new Error("User cannot subscribe to themselves."));
  }
  next();
});

export const Subscription = mongoose.model("Subscription",subscriptionSchema)
