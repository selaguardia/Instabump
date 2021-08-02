const express = require("express");
const router = express.Router();
const { User } = require("../models");

// Register Get Route
router.get("/register", (req, res) => {
  return res.render("auth/register");
});

// Login Get Route
router.get("/login", (req, res) => {
  return res.render("auth/login");
});


module.exports = router;