// External Modules
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

// Create the express app
const app = express();

// PORT
const PORT = process.env.PORT;

// Internal Modules
const controllers = require("./controllers");

// App Config
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  session({
    store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    },
  })
);

// Middleware
app.use((req, res, next) => {
  res.locals.user = req.session.currentUser;
  return next();
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Logger Location
app.use(require("./utils/logger"));

// Navlink Location
app.use(require("./utils/navlinks"));

// Auth Required
const authRequired = function (req, res, next) {
  if (!req.session.currentUser) {
    return res.redirect("/login");
  }

  return next();
};

// Routes
// app.get("/", (req, res) => {
//   res.redirect("/posts");
// });

app.get("/", (req, res) => {
  if (req.session.user) {
    const currentUser = {id: req.session.currentUser.id}
    console.log("#####", currentUser.id)
    res.render("index.ejs", currentUser);
  } else {
    res.render("index.ejs");
  }
});

app.use("/", controllers.auth);
app.use("/posts", controllers.post);
app.use("/users", authRequired, controllers.user);

// 404 Route
app.get("/*", (req, res) => {
  const context = {error: req.error};
  const currentUser = {id: req.session.currentUser.id}
  return res.render("404", context, currentUser);
});

// Tell the app to listen on port 4000
app.listen(process.env.PORT || 4000, () =>
  console.log(`Listening for client requests on port ${PORT}`)
); 
