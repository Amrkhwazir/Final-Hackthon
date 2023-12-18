import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../Models/User.js"
import jwt from "jsonwebtoken"
import Course from "../Models/Course.js";


export const signup = async(req, res, next)=>{
    console.log(req.body);
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({...req.body, password: hash });

      await  newUser.save();
      res.status(200).send("user has been created");
    } catch (error) {
        next(error);
    }
};

export const signin = async(req, res, next)=>{
    console.log(req.body);
    try {
        const user =  await User.findOne({email: req.body.email});
        if(!user) return next(404, "no user found")

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return next(400, "wrong password")

        const token = jwt.sign({ id: user._id}, process.env.JWT);
        const {password, ...other } = user._doc;
        res
        .cookie("access_token", token, {
            httpOnly: true,
        }).status(200).send(other)  
    } catch (error) {
        next(error);
    }
};
export const UserData = async (req, res, next) => {
    // Destructure values from req.body
    const { firstname, lastname, email, password, phoneNumber, course } = req.body;

    console.log(req.body);

    try {
        const studentData = new Course({ firstname, lastname, email, password, phoneNumber, course });

        await studentData.save();

        res.status(200).send(studentData);
    } catch (error) {
        // Pass the error to the error handling middleware
        next(error);
    }
};