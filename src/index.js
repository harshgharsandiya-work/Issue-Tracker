require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/user.routes");
const repoRoutes = require("./routes/repository.routes");
const issueRoutes = require("./routes/issue.routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ status: "API running" });
});

app.use("/users", userRoutes);
app.use("/repositories", repoRoutes);
app.use("/issues", issueRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
