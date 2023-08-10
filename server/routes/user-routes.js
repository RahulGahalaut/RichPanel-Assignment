import express from "express";

//import user controller functions
import { loginUser, registerUser } from "../controllers/user-controller.js";

//create user router
const userRouter = express.Router()

//define routes
userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);

//export router
export default userRouter;