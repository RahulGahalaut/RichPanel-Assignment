import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
const mongodb_URL = process.env.DATABASE_URL;

mongoose.connect(mongodb_URL)
    .then(() => {
        console.log("connected with database!")
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is Running at Port-${process.env.PORT}!`)
        })
    })

app.use(cors());
app.use(express.json());