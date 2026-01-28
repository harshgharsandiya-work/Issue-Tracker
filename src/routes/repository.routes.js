const express = require("express");

const { prisma } = require("../config/prisma");

const router = express.Router();

// create repo
router.post("/", async (req, res) => {
    try {
        const { name, description, ownerId } = req.body;

        const repo = await prisma.repository.create({
            data: {
                name,
                description,
                ownerId: Number(ownerId),
            },
        });

        return res.status(201).json(repo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// get all repo
router.get("/", async (req, res) => {
    console.log("here");

    const repos = await prisma.repository.findMany({
        include: { owner: true },
    });

    res.json(repos);
});

// get reop by user
router.get("/user/:id", async (req, res) => {
    const repos = await prisma.repository.findMany({
        where: { ownerId: Number(req.params.id) },
    });

    res.json(repos);
});

module.exports = router;
