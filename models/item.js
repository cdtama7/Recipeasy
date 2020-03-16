const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  userId: {type: String, required: true}
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
