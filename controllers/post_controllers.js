const express = require("express");
const router = express.Router();
const db = require("../models/Post")

// Temporary DB
// const posts = require("../models/Post");

// Index Route
/* router.get("/", (req, res) => {
  const allPosts = posts.find();
  res.render("index.ejs", {posts: allPosts});
}); */
router.get("/", (req, res) => {
  db.Post.find({}, (error, allPosts) => {
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


// New Product Form Route
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// Create New Product Route
/* router.post("/", (req, res) => {
  posts.create(req.body, (error, createdPost) => {
    if (error) return console.log(error);

    console.log(createdPost);
    return res.redirect("/posts");
  });
}); */
router.post("/", (req, res, next) => {
  db.Post.create(req.body, (error, createdPost) => {
    if (error) {
      console.log(error);
      req.error = error;

      const context = {
        error,
      };

      return res.render("new", context);
    }
    return res.redirect(`/posts`);
  });
});

// Show Route
/* router.get("/:postId", (req, res, next) => {
  posts.findById(req.params.postId, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    };

    return res.render("show.ejs", {post: foundPost});
  });
}); */
router.get("/:id", (req, res, next) => {

  db.Post.findById(req.params.id, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      post: foundPost,
    };

    return res.render("show", context);
  });
});

// Edit Route
/* router.get("/:postId/edit", (req, res) => {
  posts.findById(req.params.postId, (error, foundPost) => {
    if (error) return console.log(error);

    return res.render("edit.ejs", {post: foundPost});
  });
}); */
router.get("/:id/edit", (req, res, next) => {
  db.Post.findById(req.params.id, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      post: foundPost,
    };

    return res.render("edit", context);
  });
});

// Update Route
/* router.put("/:postId", (req, res) => {
  posts.findByIdAndUpdate(
    req.params.postId,
    req.body,
    (error, updatedPost) => {
      if (error) return console.log(error);

      return res.redirect(`/posts/${updatedPost.id}`);
    },
  );
}); */
router.put("/id:", (req, res, next) => {
  db.Post.findByIdAndUpdate(
    req.params.id,
    {$set: {...req.body},
  },
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
/* router.delete("/:postId", (req, res) => {
  posts.findByIdAndDelete(req.params.postId, (error, deletedPost) => {
    if (error) return console.log(error);

    console.log(deletedPost);
    return res.redirect("/posts");
  });
}); */
router.delete("/:id", (req, res, next) => {
  db.Post.findByIdAndDelete(req.params.id, (error, deletedPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    
    return res.redirect("/posts");
  });
});

module.exports = router;