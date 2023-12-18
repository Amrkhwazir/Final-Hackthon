import express from "express";
import {signup, signin, UserData} from "../Controllers/auth.js"

const authRouter = express.Router();

// CREATE USER
authRouter.post("/signup", signup)
// SIGN IN
authRouter.post("/signin", signin)

// stident data add
authRouter.post("/addstudent", UserData )

export default authRouter;