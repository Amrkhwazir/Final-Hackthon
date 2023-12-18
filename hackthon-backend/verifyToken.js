import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next)=>{
    const token = req.cookie.access_token;

    if(!token){
        return next(402, "you are not authenticated!")
    }else{
        jwt.verify(token, process.env.JWT, (err, user)=>{
            if(err) return next(402, "Token is invalid!");
            req.user = user;
            next()

     
        })
    }}
