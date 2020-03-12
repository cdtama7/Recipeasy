const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const itemSchema = new Schema({
  name: { type: String, required: true },
  userId: {type: ObjectId, required: true}
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
