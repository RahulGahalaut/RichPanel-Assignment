import SubscriptionPlan from "../models/subscription-plan-model.js";

//controller to fetch all plan's data
const getSubscriptionPlans = async function (req, res) {
    try {
        const subscriptionPlans = await SubscriptionPlan.find();
        res.status(200).json(subscriptionPlans);
    }
    //hanlde error
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error!!" });
    }
}

export { getSubscriptionPlans };