// External Modules
const express = require("express");
const methodOverride = require("method-override");
require("./config/db.connection");

// Create the express app
const app = express();

// PORT
const PORT = 4000;

// Internal Modules
const controllers = require("./controllers/");

// App Config
app.set("view engine", "ejs");
app.use(express.static("public"));

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Custom Middleware Logger
function logger(req, res, next) {
  console.log(`${req.url}: ${req.method} - ${new Date().toLocaleTimeString()}`);
  next();
}
app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.use("/posts", controllers.post);

// 404 Route
app.get("/*", (req, res) => {
  const context = {error: req.error};
  return res.render("404", context);
});

// Tell the app to listen on port 4000
app.listen(PORT, () =>
  console.log(`Listening for client requests on port ${PORT}`)
); 
