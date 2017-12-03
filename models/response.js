const mongoose = require("mongoose");
const User = require("./user");
const Comment = require("./comment");
const Event = require("./event");
const SpecificField = require("./specificfield");

// define the User model schema
const ResponseSchema = new mongoose.Schema({
  response: String,
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  specificField: { type: mongoose.Schema.Types.ObjectId, ref: "SpecificField" },

});

const Response = mongoose.model("Response", ResponseSchema);

module.exports = Response;
