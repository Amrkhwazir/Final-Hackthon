import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    course: {
        type: String
    },
    phoneNumber: {
        type: String
    },
},
{timestamps: true}
);

export default mongoose.model("Course", CourseSchema)