const express = require("express");
const {
  getGenderedUsers,
  finalAccountCreation,
  getUser,
} = require("../controllers/profileController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

router.put("/", finalAccountCreation);

router.use(requireAuth);

router.get("/", getGenderedUsers);

router.get("/:id", getUser);

module.exports = router;