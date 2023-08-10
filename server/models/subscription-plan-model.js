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
        allowedDevices: [{ type: String }],
        allowedActiveScreens: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const SubscriptionPlan = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);

export default SubscriptionPlan;

