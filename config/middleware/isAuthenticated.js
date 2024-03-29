
module.exports = function (req, res, next) {
  // If the user is logged in, continues with the request to the restricted route
  if (req.session.logged_in) {
    return next();
  }

  // If the user isn't logged in, redirects them to the login page
  return res.redirect('/login');
};
