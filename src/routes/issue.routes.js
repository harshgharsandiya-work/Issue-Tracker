const express = require("express");
const { prisma } = require("../config/prisma");

const router = express.Router();

// create issue
router.post("/", async (req, res) => {
    try {
        const { name, description, repositoryId, authorId } = req.body;

        const issue = await prisma.issue.create({
            data: {
                name,
                description,
                repositoryId: Number(repositoryId),
                authorId: Number(authorId),
            },
        });

        res.status(201).json(issue);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// get issue by repo
router.get("/repository/:id", async (req, res) => {
    const issues = await prisma.issue.findMany({
        where: { repositoryId: Number(req.params.id) },
        include: {
            author: true,
            comments: true,
        },
    });

    res.json(issues);
});

// update issue (open / close)
router.post("/:id/status", async (req, res) => {
    try {
        const { status } = req.body;

        const issue = await prisma.issue.update({
            where: { id: Number(req.params.id) },
            data: { status },
        });

        res.status(201).json(issue);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
