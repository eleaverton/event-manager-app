const router = require("express").Router();
var passport = require("passport");
const path = require("path");
const homeController = require("../controllers/homeController");
const authTutorialController = require("../controllers/authTutorialController");
const apiController = require("../controllers/apiController");
const eventController = require("../controllers/eventController");

const authCheckMiddleware = require("../middleware/auth-check");

router.route("/").get(homeController.loadHomeRoute);

//authorization routes
router.route("/login").post(authTutorialController.postLogin);
router.route("/signup").post(authTutorialController.postSignup);

//test authorization routes
router.route("/dashboard").get(authCheckMiddleware, apiController.getDashboard);

//create API routes to event
router.use("/api", authCheckMiddleware);
router.route("/api/event").post(eventController.createNewEvent);


//default to React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
