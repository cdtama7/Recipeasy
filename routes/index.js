const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const proxy = require('express-http-proxy');

router.use("/api", apiRoutes);
router.use("/spoonacular", proxy("https://api.spoonacular.com"));

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
