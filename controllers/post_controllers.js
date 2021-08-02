const express = require("express");
const router = express.Router();
const { Post } = require("../models");

// Index route
router.get("/", (req, res) => {
  res.send("It works!");
});

module.exports = router;