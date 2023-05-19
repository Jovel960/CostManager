const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    id:Number,
    birthday:Date
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("Users", userSchema);