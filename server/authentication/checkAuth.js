const jwt = require('jsonwebtoken');
require('env2')('.env');

const privetKey = process.env.SECRET_KEY;

const checkAuth = (req, res, next) => {
  const token = req.cookies.access_token;
  jwt.verify(token, privetKey, (err, decodeToken) => {
    if (err) {
      res.status(401).json({msg: 'your not authorized!'}); //when there is no token or the user edit in token or error in server like wrong secret key
      console.log(err);
    } else {
      if (decodeToken) {
        req.myToken = decodeToken;
        next();
      }
    }
  });
};

module.exports = {
  checkAuth
};