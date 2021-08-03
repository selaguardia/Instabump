module.exports = function navLinks(req, res, next) {
  if (req.session.currentUser) {
    res.locals.routes = [
      { href: "/posts/new", title: "New Post" },
      { href: "/posts", title: "Main Feed" },
      { href: "/logout", title: "Logout" },
    ];
  } else {
    res.locals.routes = [
      { href: "/login", title: "Login" },
      { href: "/register", title: "Register"},
    ];
  }
  
  next();
};