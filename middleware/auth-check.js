const jwt = require("jsonwebtoken");
// const User = require("mongoose").model("User");
const config = require("../config");
const db = require("../models");

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log("No Authorization Headers");
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(" ")[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      console.log("Token error");
      return res.status(401).end();
    }

    const userId = decoded.sub;

    // check if a user exists
    return db.User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        console.log("User error");
        return res.status(401).end();
      }

      return next();
    });
  });
};
