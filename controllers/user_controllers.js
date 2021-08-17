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
      console.log("found user", foundUser);
      console.log("found post", allPosts);
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

// Update Pin Route
router.post("/:id/togglePin", async (req, res, next) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    await foundPost.save();
    const foundUser = await User.findById(foundPost.user);
    let pins = foundUser.pins;
    if (foundUser.pins < 3) {
      foundPost.isPinned = !foundPost.isPinned;
      pins++;
      console.log("Increasing Pins", pins)
      foundUser.pins = pins;
    } else { 
      pins--;
      foundPost.isPinned = !foundPost.isPinned;
      console.log("Decreasing Pins", pins)}
      foundUser.pins = pins;
    await foundUser.save();
    return res.redirect('/posts');
  } catch (error) {
          console.log(error);
      req.error = error;
      return next();
  }
});

module.exports = router;