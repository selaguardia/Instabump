const express = require("express");
const router = express.Router();
const { Post } = require("../models");

// Index route
router.get("/", (req, res) => {
  Post.find({}, (error, allPosts) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      posts: allPosts,
    };

    res.render("index", context);
  });
});

// New Post Form Route
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// Create New Post Route
router.post("/", (req, res, next) => {
  Post.create(req.body, (error, createdPost) => {
    if (error) {
      console.log(error);
      req.error = error;

      const context = {error};

      return res.render("new", context);
    };
    return res.redirect(`/posts`);
  });
});

module.exports = router;