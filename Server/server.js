require("dotenv").config();
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const express = require("express");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/UserRoutes");
const ApplicationRoutes = require("./routes/ApplicationRoutes.js");
const signupLoginUserRoutes = require("./routes/signupLoginUserRoutes.js");
const { MongoClient } = require("mongodb");

// express app
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["blynd"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/", signupLoginUserRoutes);
app.use("/api", ApplicationRoutes);

//connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("conected to db & listening on port", process.env.PORT);
});
