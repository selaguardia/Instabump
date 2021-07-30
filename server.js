/* SECTION External modules */
const express = require("express");
const methodOverride = require("method-override");

/* SECTION module instance */
const app = express();

/* SECTION PORT  */
const PORT = 4000;

/* SECTION Internal Modules */
const controllers = require("./controllers");

/* SECTION App Config */

app.set("view engine", "ejs");

/* SECTION Middleware */

app.use(express.static("public"));

// NOTE allow body data for all routes
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

/* !SECTION */

/* SECTION Routes */

// 404
app.get("/*", (req, res) => {
  const context = {
    error: req.error,
  };

  res.render("404", context);
});

app.listen(PORT, () =>
  console.log(`Listening for client requests on port ${PORT}`)
);
