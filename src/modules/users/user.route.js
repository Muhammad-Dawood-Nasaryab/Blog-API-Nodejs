import express from "express";

import User from "./user.model.js";

const router = express.Router();

// Routes
router.get("/", (req, res) => {
    res.send(User.find({ username: "" }))
})

export default router;