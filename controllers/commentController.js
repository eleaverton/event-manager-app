const Event = require("../models/event");
const User = require("../models/user");
const Comment = require("../models/comment");

module.exports = {
  createNewComment: (req, res) => {
    const userId = req.user;
    const eventId = req.params.eventId;
    const comment = req.body.comment;

    //if event exists
    Event.findOne({ _id: eventId, attendees: userId })
      .then(event => {
        let newComment = {};
        Comment.create({
          description: comment,
          user: userId,
          event: eventId
        })
        .populate("user")
        .then(comment => {
          newComment = comment;
          Event.findByIdAndUpdate(
            { _id: eventId },
            { $addToSet: { comments: newComment._id } },
            { new: true }
          )
            .then(() => {
              User.findByIdAndUpdate(
                { _id: userId },
                { $addToSet: { comments: newComment._id } },
                { new: true }
              );
            })
            .then(() => res.json(newComment));
        });
      })
      .catch(err => res.json({ err: "erorr" }));
  },

  getComments: (req,res) =>{
    const eventId = req.params.eventId;
    Comment.find({event:eventId})
      .populate("user")          
      .then(comments => res.json(comments))
      .catch(err => res.json ({err:"error"}))
  },
  deleteComment: (req,res) => {
    const {eventId, commentId} = req.params;
    Comment.remove({ _id: commentId })
      .then(comments => res.json({success:"comment deleted"}))
      .catch(err => res.json({ err: "error" }));
  }
}

