const jwt = require('jsonwebtoken');
require('env2')('.env');

const privetKey = process.env.SECRET_KEY;

const checkAuth = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.access_token;
  jwt.verify(token, privetKey, (err, decodeToken) => {
    if (err) {
      res.status(500).json({msg: 'server error'});
      console.log(err);
    } else {
      if (decodeToken.id) {
        req.myToken = decodeToken;
        next();
      } else {
        res.status(401).json({msg: 'Login Page'});
      }
    }
  });
};

module.exports = {
  checkAuth
};