// import { Response } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/node-fetch";

const Event = require("../models/event");
const User = require("../models/user");
const SpecificField = require("../models/specificfield");
const Response = require("../models/response");

module.exports = {
  createNewEvent: (req, res) => {
    // res.send("Got to event post route");

    const {
      title,
      location,
      dateOfEvent,
      description,
      time,
      hashtag
    } = req.body;

    //push specific fields into array
    const specificFields = [];
    req.body.specificFields.forEach(field => {
      if (field !== "") {
        specificFields.push(field.newField);
      }
    });

    let createdEvent = {};
    let createdUser = {};

    //create event w/o specific field

    Event.create({
      title,
      location,
      dateOfEvent,
      time,
      description,
      hashtag,
      organizer: req.user
    }).then(events => {
      createdEvent = events;

      //create specific field object

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
      )
        .then(user => {
          createdUser = user;
          specificFields.forEach(fieldName => {
            SpecificField.create({
              fieldName: fieldName,
              event: createdEvent._id
            }).then(field =>
              Event.findOneAndUpdate(
                { _id: createdEvent._id },
                { $addToSet: { specificFields: field._id } },
                { new: true }
              )
            );
          });
        })
        .then(() => res.json(createdUser));
    });
  },
  getAllEvents: (req, res) => {
    Event.find({})
      .populate("attendees organizer comments specificFields")
      .then(events => res.json(events));
    // .then(events => res.json(events));
  },
  getOneEvent: (req, res) => {
    const eventId = req.params.eventId;
    Event.find({
      _id: eventId
    })
      .populate("attendees organizer comments specificFields")
      .then(event => res.json(event));
  },
  findEvents: (req, res) => {
    const title = req.query.title;
    Event.find({
      title: new RegExp(title, "i")
    })
      .populate("organizer")
      .then(event => res.json(event));
  },
  registerUserToEvent: (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.user;
    const specificFields = req.body.specificFields;
    let eventData = {};
    //add user to Event
    Event.findOneAndUpdate(
      { _id: eventId },
      { $addToSet: { attendees: userId } },
      { new: true }
    )
      .populate([
        {
          path: "comments",
          model: "Comment",
          populate: { path: "user", model: "User" }
        },
        { path: "organizer", model: "User" },
        { path: "attendees", model: "User" }
      ])
      .then(event => {
        eventData = event;
        //add event to user model
        User.findOneAndUpdate(
          { _id: req.user },
          { $addToSet: { eventsRegistered: event._id } },
          { new: true }
        ).then((user)=> console.log("User model here: ", user));
      })
      //TODO: Loop through specificfield array and create response item and then push response id to specificfield model
      .then(() => {
        specificFields.map(sf => {
          Response.create({
            event: eventData._id,
            user: userId,
            specificField: sf.specificFieldId,
            response: sf.response
          }).then(response => {
            SpecificField.findOneAndUpdate(
              { _id: response.specificField },
              { $addToSet: { responses: response._id } }

            ).then((ef)=> console.log("ef: ", ef));

          });
        });
      })
      .then(() => res.json({ eventData }))
      .catch(err => res.json(err));
  },
  unregisterUserFromEvent: (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.user;
    let eventData = {};
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

  updateUserImageUrl: (req, res) => {
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
    ).then(user => {
      res.json(user);
    });
  },

  updateEventImageUrl: (req, res) => {
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
    ).then(user => {
      res.json(user);
    });
  }
};
