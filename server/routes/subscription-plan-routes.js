import express from "express";

//import subscription plan controller functions from controllers
import { getSubscriptionPlans } from "../controllers/subscription-plan-controller.js";

//import middleware
import auth from "../middleware/auth.js";

//create router
const subscriptionPlanRouter = express.Router();

//define routes
subscriptionPlanRouter.get("/", auth, getSubscriptionPlans);

export default subscriptionPlanRouter;