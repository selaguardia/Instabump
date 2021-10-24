const express = require("express");
const router = express.Router();
const { User, Post } = require("../models");

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

// Show Route for all posts by one user
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id, (error, foundUser) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    Post.find({user: req.params.id}, (error, allPosts) => {
      // console.log("found user", foundUser);
      if (error) {
        console.log(error);
        req.error = error;
        return next();
      }
      const context = {
        user: foundUser,
        post: allPosts,
      };
      
      return res.render("users/show", context);
    });    
  });
});

// Show Route for all pinned posts by one user
router.get("/:id/pins", (req, res, next) => {
  User.findById(req.params.id, (error, foundUser) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
      const context = {
        user: foundUser,
        // post: allPosts,
      };
      
      return res.render("users/pins", context);
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