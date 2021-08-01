// External Modules
const express = require("express");

// Create the express app
const app = express();

// PORT
const PORT = 4000;

// Internal Modules
const postCtrls = require("./controllers/post_controllers");

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
  res.redirect("/posts");
});

app.use("/posts", postCtrls);

// 404 Route
app.get("/*", (req, res) => {
  const context = {error: req.error};
  return res.render("404", context);
});


// Tell the app to listen on port 4000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});