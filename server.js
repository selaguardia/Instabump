// External Modules
const express = require("express");

// Create the express app
const app = express();


// PORT
const PORT = 4000;


// Routes
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});


// Tell the app to listen on port 4000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});