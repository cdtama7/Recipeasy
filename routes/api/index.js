const router = require("express").Router();
const itemRoutes = require("./items");
const testRoutes = require("./")


router.use("/items", itemRoutes);
router.use("/tests", itemRoutes);

module.exports = router;
