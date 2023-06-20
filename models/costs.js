// Yovel Hadad 207125329 Yarin Rahamim 205833668

//Creating cost schema and remove the _id and __v props using set method. then exporting a mongoose model

const mongoose = require("mongoose");

const costsSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  sum: { type: Number, required: true },
});

costsSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = new mongoose.model("Costs", costsSchema);
