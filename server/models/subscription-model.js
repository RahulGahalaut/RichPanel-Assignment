import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        subscriptionType: {
            type: String,
            required: true
        },
        subscriber: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subscriptionPlan: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubscriptionPlan"
        }
    },
    { timestamps: true }
);

const Subscription = new mongoose.model("Subscription", subscriptionSchema);

export default Subscription;