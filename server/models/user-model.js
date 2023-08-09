import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 5
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 10
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 8
        }

    },
    { timestamps: true }
)

const User = new mongoose.model("User", userSchema)

export default User;