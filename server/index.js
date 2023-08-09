//import all the necessary modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

//import all routes

//import environment vriables
dotenv.config();

const app = express();
const mongodb_URL = process.env.DATABASE_URL;

//connect to database
mongoose.connect(mongodb_URL)
    .then(() => {
        console.log("connected with database!")

        //start server after connecting to database
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is Running at Port-${process.env.PORT}!`)
        })
    })

//enable cross-origin requests
app.use(cors());

app.use(express.json());
