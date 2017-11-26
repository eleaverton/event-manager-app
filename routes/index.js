const router = require("express").Router();
const passport = require("passport");
const path = require("path");
const homeController = require("../controllers/homeController");
const authTutorialController = require("../controllers/authTutorialController");
const apiController = require("../controllers/apiController");
const eventController = require("../controllers/eventController");

const authCheckMiddleware = require("../middleware/auth-check");

router.route("/").get(homeController.loadHomeRoute);

//authorization routes
router.route("/login").post(authTutorialController.postLogin);
router.route("/signup").post(authTutorialController.postSignup); // need to delete for api/user post route below

//test authorization routes
router.route("/dashboard").get(authCheckMiddleware, apiController.getDashboard);

//create API routes to event
// router.use("/api", authCheckMiddleware);
router
  .route("/api/events")
  .get(eventController.getAllEvents)
  .post(authCheckMiddleware, eventController.createNewEvent);

router
  .route("/api/events/:eventId")
  .get(eventController.getOneEvent) //get one event
  .put(); // change details of one event
//no delete route as we want to set status to cancel

router
  .route("api/events/:eventId/register")
  .post() // register a user for an event
  .put(); // unregister a user for an event

router.route("/api/users").get(); //get all users

router
  .route("/api/users/:userId")
  .get() // get detail for one user
  .put() // edit detail for one user
  .delete(); // delete one user

router.route("/api/events/:eventId/comment").post(); // create new comment

router.route("/api/events/:eventId/comment/:commentId")
.delete() // delete a comment
.put() // edit a comment

//default to React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
