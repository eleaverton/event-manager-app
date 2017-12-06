const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");
const passport = require("passport");
const app = express();
const config = require("./config");
const PORT = process.env.PORT || 3001;
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: ".env" });

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to the database and load models
require("./models").connect(config.dbUri);

//initialize then load passport configurations
app.use(passport.initialize());

//load passport strategies
require("./config/passport.js")(passport);

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
