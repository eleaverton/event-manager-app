const Event = require("../models/event");
const User = require("../models/user");
const SpecificField = require("../models/specificfield");
const Response = require("../models/response");

module.exports = {
  getAllUserEvents: (req, res) => {
    const userId = req.user;
    User.findById({ _id: userId })
      //   .populate("eventsOrganized eventsRegistered")
      .populate([
        {
          path: "comments",
          model: "Comment",
          populate: { path: "user", model: "User" }
        },
        {
          path: "eventsOrganized",
          model: "Event",
          populate: {
            path: "specificFields",
            model: "SpecificField",
            populate: { path: "responses", model: "Response" }
          }
        },
        { path: "eventsRegistered", model: "Event" }
      ])
      .then(user => res.json(user));
  }
};
