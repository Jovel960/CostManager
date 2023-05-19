const mongoose = require("mongoose");

const costsSchema = new mongoose.Schema({
  user_id: Number,
  year: Number,
  month: Number,
  day: Number,
  description: String,
  category: String,
  sum: Number,
});

costsSchema.set("toJSON", {
    transform:(document, returnedObject) => {
        delete returnedObject._id
        delete returnedObject.__v;
    }
})

module.exports = new mongoose.model("Costs", costsSchema);