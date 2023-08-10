import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//import required model from models
import User from "../models/user-model.js";

//controller for register request
const registerUser = async function (req, res) {
    try {
        //extract data from request body
        const { name, email, password } = req.body;
        //check if user exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            res.status(409).json({ message: "User already exists!" });
        }
        else {
            // Hash the password
            const hashedPassword = bcrypt.hash(password, process.env.BCRYPT_ROUND);
            //create new user
            const newUser = User({
                name: name,
                email: email,
                password: hashedPassword
            });
            await newUser.save();
            //generate token
            const token = Jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

            res.status(201).json({ token: token });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error!!" });
    }
}

//controller for login
const loginUser = async function (req, res) {
    try {
        //extract data from request body
        const { email, password } = req.body;
        //hash the password
        const hashedPassword = bcrypt.hash(password, process.env.BCRYPT_ROUND);
        //find existing user
        const existingUser = await User.findOne({ email: email, password: hashedPassword });
        if (existingUser) {
            //generate token
            const token = Jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET);
            res.status(200).json({ token: token });
        }
        else {
            res.status(401).json({ message: "Invalid credentials!" });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error!!" });
    }
}

export { loginUser, registerUser };