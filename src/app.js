import express from "express";

import router from "./routes/main.route.js";

import logger from "./middlewares/logger.middleware.js";

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Route
app.use("/api", router);

export default app;