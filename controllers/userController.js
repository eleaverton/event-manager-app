const Event = require("../models/event");
const User = require("../models/user");

module.exports = {
    getAllUserEvents: (req,res) => {
        const userId = req.user;
        User.findById({_id:userId}).populate("eventsOrganized eventsRegistered").then(user => res.json(user));
    }
}