import express from "express";

import blogRouter from "../modules/blog/blog.route.js";
import userRouter from "../modules/users/user.route.js";

const router = express.Router();

// Routes
router.use("/auth", userRouter);
router.use("/blog", blogRouter);

export default router;
