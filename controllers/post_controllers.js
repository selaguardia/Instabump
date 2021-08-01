const express = require("express");
const router = express.Router();

// Temporary DB
const posts = require("../models/Post");

// Index Route
router.get("/", (req, res) => {
  const allPosts = posts.find();
  res.render("index.ejs", {posts: allPosts});
});

// New Product Form Route
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// Create New Product Route
router.post("/", (req, res) => {
  posts.create(req.body, (error, createdPost) => {
    if (error) return console.log(error);

    console.log(createdPost);
    return res.redirect("/posts");
  });
});

// Show Route
router.get("/:postId", (req, res, next) => {
  posts.findById(req.params.postId, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    };

    return res.render("show.ejs", {post: foundPost});
  });
});

module.exports = router;