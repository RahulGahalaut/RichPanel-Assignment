//import model
import mongoose from "mongoose";
import SubscriptionPlan from "../models/subscription-plan-model.js";
import dotenv from "dotenv";

//configuring enviroment variables
dotenv.config({ path: '../.env' });

//plans data
const subscriptionPlans = [
    {
        planName: "basic",
        monthlyPrice: 100,
        yearlyPrice: 1000,
        videoQulaity: 'good',
        videoResolution: '480p',
        allowedDevices: [
            'phone'
        ],
        allowedActiveScreens: 1
    },
    {
        planName: "standard",
        monthlyPrice: 200,
        yearlyPrice: 2000,
        videoQulaity: 'good',
        videoResolution: '720p',
        allowedDevices: [
            'phone', 'tablet'
        ],
        allowedActiveScreens: 3
    },
    {
        planName: "premium",
        monthlyPrice: 500,
        yearlyPrice: 5000,
        videoQulaity: 'better',
        videoResolution: '1080p',
        allowedDevices: [
            'phone', 'tablet', 'computer'
        ],
        allowedActiveScreens: 5
    }, {
        planName: "regular",
        monthlyPrice: 700,
        yearlyPrice: 7000,
        videoQulaity: 'best',
        videoResolution: '4K+HDR',
        allowedDevices: [
            'phone', 'tablet', 'computer', 'tv'
        ],
        allowedActiveScreens: 10
    }
]
async function seedDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        await SubscriptionPlan.insertMany(subscriptionPlans);
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.disconnect();
    }
}

seedDatabase();