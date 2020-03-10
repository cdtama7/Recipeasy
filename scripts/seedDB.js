const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3"
);

const itemSeed = [
    {
        name: "peanut butter"
    },
    {
        name: "jelly"
    },
    {
        name: "bread"
    },
    {
        name: "banana"
    },
    {
        name: "strawberries"
    },

];
db.Items
  .remove({})
  .then(() => db.Items.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
