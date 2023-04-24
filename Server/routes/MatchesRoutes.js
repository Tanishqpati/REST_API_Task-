const express = require("express");
const {
  addMatch,
  getMatches,
} = require("../controllers/profileController");
const requireAuth = require('../middleware/requireAuth')
const router = express.Router();


router.use(requireAuth)


router.put("/", addMatch);

router.get("/", getMatches);


module.exports = router;
