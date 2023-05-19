const express = require("express");
const mongoose = require("mongoose");
const aboutRouter = require("./controllers/abous");
const middleWares = require("./utilities/middleware");
const addCost = require("./controllers/addCost");
const app = express();
const config = require("./utilities/config");


mongoose
  .connect(config.MONGODB_URI)
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err, "error"));

app.use(express.json());
app.use("/addcost", addCost);
app.use("/about", aboutRouter);
app.use(middleWares.unKnownEndPoint);

module.exports = app;
