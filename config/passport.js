module.exports = function(passport) {
  const jwt = require("jsonwebtoken");
  //const User = require("mongoose").model("User");
  const User = require("../models/user");
  const PassportLocalStrategy = require("passport-local").Strategy;
  const config = require("../config");

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  //LOCAL SIGNIN
  passport.use(
    "local-login",
    new PassportLocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: false,
        passReqToCallback: true
      },
      (req, email, password, done) => {
        const userData = {
          email: email.trim(),
          password: password.trim()
        };

        // find a user by email address
        return User.findOne({ email: userData.email }, (err, user) => {
          if (err) {
            return done(err);
          }

          if (!user) {
            const error = new Error("Incorrect email or password");
            error.name = "IncorrectCredentialsError";

            return done(error);
          }

          // check if a hashed user's password is equal to a value saved in the database
          return user.comparePassword(
            userData.password,
            (passwordErr, isMatch) => {
              if (err) {
                return done(err);
              }

              if (!isMatch) {
                const error = new Error("Incorrect email or password");
                error.name = "IncorrectCredentialsError";

                return done(error);
              }

              const payload = {
                sub: user._id
              };

              // create a token string
              const token = jwt.sign(payload, config.jwtSecret);
              const data = {
                name: user.name,
                id:user._id
              };

              return done(null, token, data);
            }
          );
        });
      }
    )
  );

  passport.use(
    "local-signup",
    new PassportLocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: false,
        passReqToCallback: true
      },
      (req, email, password, done) => {

        const userData = {
          email: email.trim(),
          password: password.trim(),
          name: req.body.name.trim(),
          twitterHandle: req.body.twitterHandle.trim(),
          dateOfBirth: req.body.dateOfBirth,
          zip: req.body.zip.trim(),
          imageUrl: req.body.imageUrl,
          imageName: req.body.imageName,
          image: req.body.image
        };

        const newUser = new User(req.body);
        
        newUser.save((err,user) => {
          if (err) {
            return done(err);
          }

          const payload = {
            sub: user._id
          };

          // create a token string
          const token = jwt.sign(payload, config.jwtSecret);
          const data = {
            name: user.name,
            id:user._id
          };
          return done(null,token,data);
        });
      }
    )
  );
};
