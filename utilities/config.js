require("dotenv").config();
//Get the env mongo uri and pro variables
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

module.exports = { MONGODB_URI, PORT };
