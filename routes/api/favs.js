const router = require("express").Router();
const favController = require("../../controllers/favController");

router.route("/forUser/:userId")
  .get(favController.findAllForUser);

router.route("/forUserByRecipeId/:userId/:recipeId")
  .get(favController.findForUserByRecipeId);

router.route("/deleteForUserByRecipeId/:userId/:recipeId")
  .delete(favController.deleteForUserByRecipeId);

router.route("/")
  .post(favController.create);

router
  .route("/:id")
  .get(favController.findById)
  .put(favController.update)
  .delete(favController.remove);

module.exports = router;
