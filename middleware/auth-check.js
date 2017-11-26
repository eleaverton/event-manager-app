const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/user");

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log("No Authorization Headers");
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization;

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      console.log("Token error");
      return res.status(401).end();
    }
    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        console.log("User error");
        return res.status(401).end();
      }
      
      //pass the user id and allow the function to access it via req.user
      req.user = user._id;
      return next();
    });
  });
};
