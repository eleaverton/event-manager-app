const Event = require("../models/event");
const User = require("../models/user");

module.exports = {
  createNewEvent: (req, res) => {
    // res.send("Got to event post route");
    const { title, location, dateOfEvent, description, hashtag, specificFields } = req.body;
    console.log("req.body: ", req.body);
    console.log("req.body.specificFields: ", req.body.specificFields);

    Event.create({
      title,
      location,
      dateOfEvent,
      description,
      hashtag,
      organizer: req.user
    })
      .then(events => {
        console.log(events);
        return User.findOneAndUpdate(
          {
            _id: req.user
          },
          {
            $push: {
              eventsOrganized: events._id
            }
          },
          {
            new: true
          }
        ).then(user => {
          res.json(user);
        });
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
    Event.findOneAndUpdate({ _id: eventId }, { $addToSet: { attendees: userId } }, { new: true })
      // .populate("attendees organizer comments")
      .populate([
        { path: "comments", model: "Comment", populate: {path:"user", model:"User"} },
        { path: "organizer", model: "User" },
        { path: "attendees", model: "User" },
      ])
      .then(event => {
        eventData = event;
        const user = User.findOneAndUpdate({ _id: req.user }, { $addToSet: { eventsRegistered: eventId } }, { new: true });
        return user;
      })
      .then(() => res.json({ eventData }))
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
  },


  updateUserImageUrl: (req,res) => {
      console.log("here");
      console.log(req.body);
      User.findOneAndUpdate(
        {
          _id: req.body.id
        },
        {
          $set: {
            imageUrl: req.body.imageUrl
          }
        },
        {
          new: true
        }
      ).then((user)=>{
        console.log("here send");
        res.json(user);
      });
  },

  updateEventImageUrl: (req,res) => {
      console.log("here");
      console.log(req.body);
      Event.findOneAndUpdate(
        {
          _id: req.body.id
        },
        {
          $set: {
            imageUrl: req.body.imageUrl
          }
        },
        {
          new: true
        }
      ).then((user)=>{
        console.log("here send");
        res.json(user);
      });
  }

};
