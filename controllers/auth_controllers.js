const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");

// Register Get Route
router.get("/register", (req, res) => {
  return res.render("auth/register");
});

// Login Get Route
router.get("/login", (req, res) => {
  return res.render("auth/login");
});

// Register Post Route
router.post("/register", async (req, res) => {
  try {
    const foundUser = await User.exists({email: req.body.email});
    if (foundUser) {
      return res.redirect("/login");
    }

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(req.body.password, salt);

    req.body.password = hash;

    const newUser = await User.create(req.body);

    return res.redirect("/login");
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

// Login Post Route
router.post("/login", async function (req, res) {
  try {
    const foundUser = await User.findOne({email: req.body.email});
    console.log(foundUser);

    if (!foundUser) return res.redirect("/register");

    const match = await bcrypt.compare(req.body.password, foundUser.password);

    if (!match) return res.send("Password invalid.");

    req.session.currentUser = {
      id: foundUser._id,
      username: foundUser.username,
    };

    return res.redirect("/posts");

  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

// Logout Route
router.get("/logout", async function (req, res) {
  try {
    await req.session.destroy();
    return res.redirect("/login");
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

module.exports = router;