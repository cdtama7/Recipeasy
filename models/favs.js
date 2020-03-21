const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const Number = Schema.Types.Number;

const favSchema = new Schema({
  recipe: {type: Mixed, required: true},
  userId: {type: String, required: true},
  recipeId: {type: Number, required: true}
});

const Favs = mongoose.model("Favs", favSchema);

module.exports = Favs;
