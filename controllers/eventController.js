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
          {},
          { $push: { eventOrganized: event._id } },
          { new: true }
        );
      })
      .then(user => {
        res.json(req.body);
      });
  }
};
