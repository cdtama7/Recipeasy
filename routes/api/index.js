const router = require("express").Router();
const itemRoutes = require("./items");
const favRoutes = require("./favs");

router.use("/items", itemRoutes);
router.use("/favs", favRoutes);

module.exports = router;
