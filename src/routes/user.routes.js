const express = require("express");
const { prisma } = require("../config/prisma");

const router = express.Router();

// create user
router.post("/", async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await prisma.user.create({
            data: { name, email },
        });
        console.log(user);

        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// get all users
router.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

module.exports = router;
