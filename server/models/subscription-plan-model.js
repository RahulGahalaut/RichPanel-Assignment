import mongoose from "mongoose";

const subscriptionPlanSchema = mongoose.Schema(
    {
        planName: {
            type: String,
            required: true,
            unique: true
        },
        monthlyPrice: {
            type: Number,
            required: true
        },
        yearlyPrice: {
            type: Number,
            required: true
        },
        videoQulaity: {
            type: String,
            require: true
        },
        videoResolution: {
            type: String,
            required: true
        },
        allowedDevices: [
            {
                type: String,
                required: true
            }
        ],
        allowedActiveScreens: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

const SubscriptionPlan = mongoose.Model('SubscriptionPlan', subscriptionPlanSchema);

export default SubscriptionPlan;

