const router = require("express").Router();
var passport = require("passport");
const path = require("path");
const homeController = require("../controllers/homeController");
// const authController = require("../controllers/authController");
const authTutorialController = require("../controllers/authTutorialController");
const apiController = require("../controllers/apiController");

const authCheckMiddleware = require("../middleware/auth-check");

router.route("/").get(homeController.loadHomeRoute);

//authorization routes
router.route("/login").post(authTutorialController.postLogin);
router.route("/signup").post(authTutorialController.postSignup);

//test authorization routes
router.route("/dashboard").get(authCheckMiddleware, apiController.getDashboard);

//default to React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
