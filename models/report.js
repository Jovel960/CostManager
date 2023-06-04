//Creating report schema and remove the _id and __v props using set method. then exporting a mongoose model 

const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  user_id: Number,
  year: Number,
  month: Number,
  day: Number,
  food: [Object],
  health: [Object],
  housing: [Object],
  education: [Object],
  transportation: [Object],
  other: [Object],
});

reportSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Report", reportSchema);
