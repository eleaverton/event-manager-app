const mongoose = require("mongoose");
const User = require("./user");
const Comment = require("./comment");

// define the User model schema
const EventSchema = new mongoose.Schema({
  title: String,
  location: String,
  dateOfEvent: Date,
  createdDate: { type: Date, default: Date.now },
  time: String,
  description: String,
 
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
