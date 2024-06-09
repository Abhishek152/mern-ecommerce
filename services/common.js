const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjVlNzJlMjAxMDZlZjg0NGE2YzZiNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNzk1NDQ2Mn0.6MwPaQXwrdF0nJD5Az5pkfz_1ACWOueQdeuFYFhpP9w"
  return token;
};