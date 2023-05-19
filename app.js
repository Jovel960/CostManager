const express = require("express");
const mongoose = require("mongoose");
const aboutRouter = require("./controllers/abous");
const middleWares = require("./utilities/middleware");
const addCost = require("./controllers/addCost");
const app = express();

mongoose
  .connect("mongodb+srv://jovelh960:jovelh960@cluster0.rqk3rwu.mongodb.net/costs?retryWrites=true&w=majority")
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err,"error"));

app.use(express.json());
app.use("/addcost", addCost);
app.use("/about", aboutRouter);
app.use(middleWares.unKnownEndPoint);

module.exports = app;
