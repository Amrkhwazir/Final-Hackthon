import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./Routes/authRoutes.js";
import cookieParser from "cookie-parser";

const port = 8800;
const app = express();
dotenv.config()


const connect = () => {
        mongoose.connect(process.env.MONGO)
        .then(()=>{
                console.log("DB connected");
            }).catch((err)=>{
                    throw err 
                })
            };

app.use(cors());
app.use(cookieParser());
app.use(express.json())
            
// API Routes
app.use("/api/auth", authRouter);


// Port Listen
app.listen(port, ()=>{
    console.log(`server in running in port number ${port}`)
    connect()
})