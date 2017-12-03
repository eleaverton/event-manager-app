const mongoose = require("mongoose");
const User = require("./user");
const Comment = require("./comment");
const Event = require("./event");
const Response = require("./response");

// define the User model schema
const SpecificFieldSchema = new mongoose.Schema({
  fieldName: String,
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  responses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Response" }],
});

const SpecificField = mongoose.model("SpecificField", SpecificFieldSchema);

module.exports = SpecificField;