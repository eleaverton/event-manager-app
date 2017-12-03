const router = require("express").Router();
const passport = require("passport");
const path = require("path");
const homeController = require("../controllers/homeController");
const authTutorialController = require("../controllers/authTutorialController");
const apiController = require("../controllers/apiController");
const eventController = require("../controllers/eventController");
const commentController = require("../controllers/commentController");
const userController = require("../controllers/userController");

const authCheckMiddleware = require("../middleware/auth-check");

// router.route("/").get(homeController.loadHomeRoute);

//authorization routes
router.route("/login").post(authTutorialController.postLogin);
router.route("/signup").post(authTutorialController.postSignup); // need to delete for api/user post route below
router.route("/userImageUrl").put(eventController.updateUserImageUrl);
router.route("/eventImageUrl").put(eventController.updateEventImageUrl); 

//test authorization routes
router.route("/dashboard").get(authCheckMiddleware, apiController.getDashboard);

//create API routes to event
// router.use("/api", authCheckMiddleware);
router
  .route("/api/events")
  .get(eventController.getAllEvents)
  .post(authCheckMiddleware, eventController.createNewEvent);

router.route("/api/events/search").get(eventController.findEvents);

router
  .route("/api/events/:eventId/register")
  .post(authCheckMiddleware, eventController.registerUserToEvent) // register a user for an event
  .put(authCheckMiddleware, eventController.unregisterUserFromEvent); // unregister a user for an event


   /**
     *
     * Comment Routes
     */
router
  .route("/api/events/:eventId/comments")
  .post(authCheckMiddleware,commentController.createNewComment)// create new comment
  .get(commentController.getComments);

router
  .route("/api/events/:eventId/comments/:commentId")
  .get()
  .delete(commentController.deleteComment) // delete a comment
  .put(); // edit a comment

     /**
     *
     * End Comment Routes
     */


router
  .route("/api/events/:eventId")
  .get(eventController.getOneEvent) //get one event
  .put(); // change details of one event
//no delete route as we want to set status to cancel

router.route("/api/users").get(authCheckMiddleware,userController.getAllUserEvents); //get all users

router
  .route("/api/users/:userId")
  .get() // get detail for one user
  .put() // edit detail for one user
  .delete(); // delete one user

//default to React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
