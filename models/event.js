const mongoose = require("mongoose");
const User = require("./user");
const Comment = require("./comment");
const SpecificField = require("./specificfield");

// define the User model schema
const EventSchema = new mongoose.Schema({
  title: String,
  location: String,
  dateOfEvent: Date,
  createdDate: { type: Date, default: Date.now },
  time: String,
  description: String,
  hashtag: String,
  imageName: String,
  imageUrl: String,
  image: String,
  specificFields: [{ type: mongoose.Schema.Types.ObjectId, ref: "SpecificField" }],
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
