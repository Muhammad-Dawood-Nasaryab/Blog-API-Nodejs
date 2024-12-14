import bcrypt from "bcrypt";
import mongoose from "mongoose";

import connectUsersDB from "./user.connection.js";

const UserSchema = mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = await connectUsersDB(UserSchema);
export default User;
