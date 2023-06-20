// Yovel Hadad 207125329 Yarin Rahamim 205833668

require("dotenv").config();
//Get the env mongo uri and port variables
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001

module.exports = { MONGODB_URI, PORT };
