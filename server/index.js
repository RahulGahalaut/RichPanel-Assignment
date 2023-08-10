import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

//import all routes
import userRouter from "./routes/user-routes.js";
import subscriptionRouter from "./routes/subscription-routes.js";
import subscriptionPlanRouter from "./routes/subscription-plan-routes.js";

//import all environment vriables
dotenv.config();

const app = express();

//enable cross-origin requests
app.use(cors());

const mongodb_URL = process.env.DATABASE_URL;

//connect to database
mongoose.connect(mongodb_URL)
    .then(() => {
        console.log("connected with database!");
        //start server after connecting to database
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is Running at Port-${process.env.PORT}!`);
        })
    })

app.use(express.json());

app.use('/users', userRouter);
app.use('/subscriptions', subscriptionRouter);
app.use('/subscription-plans', subscriptionPlanRouter)
