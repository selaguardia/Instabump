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



module.exports = router;