import mongoose from "mongoose";


const AccessTokenSchema = new mongoose.Schema(
  {
    userId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
    token: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date
    },
    usageCount: {
      type: Number,
      default: 0
    },
    maxUsage: {
      type: Number,
      default: 1000
    }
  }, { timestamps: true}
);

export const AccessToken = mongoose.model("AccessToken", AccessTokenSchema)