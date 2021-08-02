const routes = [{ href: "/posts/new", title: "New Post" }];

module.exports = function navLinks(req, res, next) {
  // locals
  res.locals.routes = routes;
  next();
};