const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/forUser/:userId")
  .get(itemController.findAllForUser);

router.route("/")
  .post(itemController.create);

router
  .route("/:id")
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.remove);

module.exports = router;
