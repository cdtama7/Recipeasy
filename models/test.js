const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  name: { type: String, required: true },
});

const Testers = mongoose.model("Tests", testSchema);

module.exports = Testers;
