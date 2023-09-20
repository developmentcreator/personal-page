import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true,
        },
        pasword: {
            type: String,
            require: true,
            min: 8,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type: String,
            default: [],
        },
        location: String,
        ocupation: String,
        viewedProfile: Number,
        impressions: Number,
    }, { timestamps: true }
);

const User = mongoose.model("User", UserSchema)
export default User;