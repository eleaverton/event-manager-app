const Event = require("../models/event");
const User = require("../models/user");

module.exports = {
  createNewEvent: (req, res) => {
    // res.send("Got to event post route");
    console.log(`got to post create new event route. User = ${req.user}`);
    const { title, location, dateOfEvent, description, hashtag, specificFields } = req.body;
    Event.create({
      title,
      location,
      dateOfEvent,
      description,
      hashtag,
      organizer: req.user
    })
      .then(event => {
        return User.findOneAndUpdate(
          {
            _id: req.user
          },
          {
            $push: {
              eventsOrganized: event._id
            }
          },
          {
            new: true
          }
        );
      })
      .then(user => {
        res.json(user);
      });
  },
  getAllEvents: (req, res) => {
    Event.find({})
      .populate("attendees organizer comments")
      .then(events => res.json(events));
    // .then(events => res.json(events));
  },
  getOneEvent: (req, res) => {
    const eventId = req.params.eventId;
    Event.find({
      _id: eventId
    })
      .populate("organizer")
      .then(event => res.json(event));
  },
  findEvents: (req, res) => {
    const title = req.query.title;
    console.log(req);
    Event.find({
      title: new RegExp(title, "i")
    })
      .populate("organizer")
      .then(event => res.json(event));
  },
  registerUserToEvent: (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.user;
    let eventData = {};
    Event.findOneAndUpdate(
      { _id: eventId },
      {
        $addToSet: {
          attendees: userId
        }
      },
      {
        new: true
      }
    )
      .populate("attendees organizer comments")
      .then(event => {
        eventData = event;
        const user = User.findOneAndUpdate(
          {
            _id: req.user
          },
          {
            $addToSet: {
              eventsRegistered: eventId
            }
          },
          {
            new: true
          }
        );
        return user;
      })
      .then(() =>
        res.json({
          eventData
        })
      )
      .catch(err => res.json(err));
  },
  unregisterUserFromEvent: (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.user;
    let eventData = {};
    console.log("unregister user route");
    Event.findOneAndUpdate(
      { _id: eventId },
      {
        $pull: {
          attendees: userId
        }
      },
      {
        new: true
      }
    )
      .populate("attendees organizer comments")
      .then(event => {
        eventData = event;
        const user = User.findOneAndUpdate(
          {
            _id: req.user
          },
          {
            $pull: {
              eventsRegistered: eventId
            }
          },
          {
            new: true
          }
        );
        return user;
      })
      .then(() =>
        res.json({
          eventData
        })
      )
      .catch(err => res.json(err));
  }
};
