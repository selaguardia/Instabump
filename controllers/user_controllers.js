const express = require("express");
const router = express.Router();

const { User } = require("../models");

// Index Route
router.get("/", (req, res) => {
  User.find({}, (error, allUsers) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      users: allUsers
    };
    return res.render("users/index", context);
  });
});

// Show Route
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      user: foundUser,
    };

    return res.render("users/show", context);
  });
});

// Create Route
router.post("/", (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    return res.redirect("/users");
  });
});

module.exports = router;