const router = require("express").Router();
const apiController = require("../controllers/apiController");
const path = require("path");

//api articles route
router.route("/api/").get(apiController.getTestRoute);

// router
//   .route("/api/saved")
//   .get(savedController.findAll)
//   .post(savedController.create)
//   .delete(savedController.deleteArticle);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
