const express = require("express");
const { prisma } = require("../config/prisma");

const router = express.Router();

// add comment to issue
router.post("/", async (req, res) => {
    try {
        const { content, issueId, authorId } = req.body;

        const comment = await prisma.comment.create({
            data: {
                content,
                issueId: Number(issueId),
                authorId: Number(authorId),
            },
        });

        return res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

// get comment by issue
router.get("/issue/:id", async (req, res) => {
    const comments = await prisma.comment.findMany({
        where: {
            issueId: Number(req.params.id),
        },
        include: {
            author: true,
        },
    });

    return res.json(comments);
});

module.exports = router;
