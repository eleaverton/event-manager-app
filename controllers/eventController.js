const Event = require("../models/event");
const User = require("../models/user");

module.exports = {
  createNewEvent: (req, res) => {
    // res.send("Got to event post route");
    console.log(`got to post create new event route. User = ${req.user}`);
    const { title, location, dateOfEvent, description } = req.body;
    Event.create({
      title,
      location,
      dateOfEvent,
      description,
      organizer: req.user
    })
      .then(event => {
        return User.findOneAndUpdate(
          {_id:req.user},
          { $push: { eventOrganized: event._id } },
          { new: true }
        );
      })
      .then(user => {
        res.json(req.body);
      });
  },
  getAllEvents: (req, res) => {
    Event.find({})
      .populate("organizer")
      .then(events => res.json(events))
    // .then(events => res.json(events));
  },
  getOneEvent: (req, res) => {
    const eventId = req.params.eventId
    Event.find({ _id: eventId })
      .populate("organizer")
      .then(event => res.json(event));
  },
  findEvents: (req,res) => {
    const title = req.params.searchTitle;
    Event.find({ title: title })
      .populate("organizer")
      .then(event => res.json(event));
  }
};
