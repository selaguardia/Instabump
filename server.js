// External Modules
const express = require("express");

// Create the express app
const app = express();


// PORT
const PORT = 4000;

// Temporary Database
// const posts = ["Image 1", "Image 2", "Image 3"];
const posts = require("./models/Post");

// App Config
app.set("view engine", "ejs");
app.use(express.static("public"));

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);

  next();
});

app.use(express.urlencoded({extended: true}));

// Routes
app.get("/", (req, res) => {
  res.redirect("/home");
});

// Index Route
app.get("/posts/", (req, res) => {
  const allPosts = posts.find();

  const context = {posts: allPosts};

  res.render("index.ejs", context);
});

// Create Route
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts/", (req, res) => {
  posts.create(req.body, (error, createdPost) => {
    if (error) return console.log(error);

    console.log(createdPost);
    return res.redirect("/posts");
  });
});

// Show Route
app.get("/posts/:postId", (req, res, next) => {
  posts.findById(req.params.postId, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    };

    const context = {post: foundPost};
    return res.render("show.ejs", context);
  });
});

// 404 Route
app.get("/*", (req, res) => {
  const context = {error: req.error};
  return res.render("404", context);
});


// Tell the app to listen on port 4000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});