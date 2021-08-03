const routes = [
  { href: "/posts/new", title: "New Post" },
  { href: "/posts", title: "Pinned Feed" },
  { href: "/logout", title: "Logout" },
];

const authRoutes = [
  { href: "/login", title: "Login" },
  { href: "/register", title: "Register"},
];

module.exports = function navLinks(req, res, next) {
  if (req.session.currentUser) {
    res.locals.routes = routes;
  } else {
    res.locals.routes = authRoutes;
  }
  
  next();
};