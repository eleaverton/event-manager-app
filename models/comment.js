const mongoose = require("mongoose");
const User = require("./user");
const Event = require("./event");

// define the User model schema
const CommentSchema = new mongoose.Schema({
  description: String,
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
