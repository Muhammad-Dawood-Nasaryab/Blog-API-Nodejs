import chalk from "chalk";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectUsersDB = async (schema) => {
    try {
        const conn = await mongoose.createConnection(process.env.USERS_URI).asPromise();
        console.log(`\n${chalk.bgGreen(" Success ")} Users database connected`);
        return conn.model("User", schema);
    } catch (error) {
        console.log(`\n${chalk.bgRed(" Fail ")} Users database: ${error}`);
    };
};

export default connectUsersDB;