// Yovel Hadad 207125329 Yarin Rahamim 205833668

// Creating user schema and remove the _id and __v props using set method. then exporting a mongoose model 
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  id: Number,
  birthday: Date,
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Users", userSchema);
