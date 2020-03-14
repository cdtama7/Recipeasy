const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

const userSeed = [
  {
    username: "admin@email.com",
    password: "12345",
    name: "admin"
  }
];
db.Users.deleteMany({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    
    let newUser = data.insertedIds[0];
    const itemSeed = [
      {
        name: "peanut butter",
        userId: newUser._id,
      }
    ];
   
    db.Items.deleteMany({})
      .then(() => db.Items.collection.insertMany(itemSeed))
      .then(data => {
        console.log(data.result.n + " item records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
