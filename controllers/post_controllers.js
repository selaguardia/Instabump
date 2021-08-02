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

    res.render("posts/index", context);
  });
});

// New Post Form Route
router.get("/new", (req, res) => {
  res.render("posts/new");
});

// Create New Post Route
router.post("/", (req, res, next) => {
  Post.create(req.body, (error, createdPost) => {
    if (error) {
      console.log(error);
      req.error = error;

      const context = {error};

      return res.render("/posts/new", context);
    };
    return res.redirect(`/posts/${createdPost.id}`);
  });
});

// Show Route
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      post: foundPost,
    };

    return res.render("posts/show", context);
  });
});

// Edit Route
router.get("/:id/edit", (req, res, next) => {
  Post.findById(req.params.id, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      post: foundPost,
    };

    return res.render("posts/edit", context);
  });
});

// Update Route
router.put("/:id", (req, res, next) => {
  Post.findByIdAndUpdate(
    req.params.id,
    {$set: {...req.body}},
    {new: true},
    (error, updatedPost) => {
      if (error) {
        console.log(error);
        req.error = error;
        return next();
      }

      return res.redirect(`/posts/${updatedPost.id}`);
    });
});

// Delete Route
router.delete("/:id", (req, res, next) => {
  Post.findByIdAndDelete(req.params.id, (error, deletedPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    return res.redirect("/posts");
  });
});

module.exports = router;