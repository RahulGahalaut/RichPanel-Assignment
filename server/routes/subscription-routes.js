import express from "express";

//import subscription controller functions
import { addSubscription, cancelSubscription } from "../controllers/subscription-controller.js";

//import middleware
import auth from "../middleware/auth.js";

//create router for subscription
const subscriptionRouter = express.Router();

//define routes
subscriptionRouter.post('/subscribe', auth, addSubscription);
subscriptionRouter.put('/unsubscribe', auth, cancelSubscription);

//export router
export default subscriptionRouter;