import dotenv from "dotenv";
import chalk from "chalk";

const logger = (req, res, next) => {
    const colors = {
        GET: chalk.green,
        POST: chalk.yellow,
        PUT: chalk.magenta,
        DELETE: chalk.red,
    };

    const color = colors[req.method];

    console.log(`    ${color(req.method)}  ${chalk.gray(`http://localhost:${process.env.PORT}`)}`);
};

export default logger;