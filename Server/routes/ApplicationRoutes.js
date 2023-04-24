const express = require("express");
const UserRoutes = require("./UserRoutes.js");
const MatchesRoutes = require("./MatchesRoutes.js");

const router = express.Router();
const app = express();

// login signup routes
app.use("/users", UserRoutes);

app.use("/matches", MatchesRoutes);

module.exports = router;
