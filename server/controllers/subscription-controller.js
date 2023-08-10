//import required model from models
import { json } from "express";
import Subscription from "../models/subscription-model.js";

//add new subscription
const addSubscription = async function (req, res) {
    try {
        //extract user-id
        const subscriber = req.user.userId;
        //extract requred data from request body
        const { subscriptionType, subscriptionPlan } = req.body;
        //create new subscription
        const newSubscription = Subscription({
            subscriptionType: subscriptionType,
            subscriptionState: 'active',
            subscriber: subscriber,
            subscriptionPlan: subscriptionPlan
        });
        //save new subscription
        newSubscription = await newSubscription.save();
        res.status(201).json(newSubscription);
    }
    //handle error
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error!!" });
    }
}

//cancel subscription
const cancelSubscription = async function (req, res) {
    try {
        //extract subscription id
        const subscriptionId = req.body.subscriptionId;
        const cancelledSubscription = Subscription.findByIdAndUpdate(subscriptionId, {
            subscriptionState: "cancelled"
        }, {
            new: true
        });
        res.status(200).json(cancelledSubscription);
    }
    //handle error
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error!!" });
    }
}

export { addSubscription, cancelSubscription };
