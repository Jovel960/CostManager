const express = require("express");
const mongoose = require("mongoose");
const aboutRouter = require("./controllers/aboutUsRouter");
const middleWares = require("./utilities/middleware");
const usersRouter = require("./controllers/usersRouter");
const addCostRouter = require("./controllers/addCostRouter");
const reportRouter = require("./controllers/reportRouter");
const app = express();
const config = require("./utilities/config");

mongoose
  .connect(config.MONGODB_URI)
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err, "error"));

app.use(express.json());
app.use("/addcost", addCostRouter);
app.use("/about", aboutRouter);
app.use("/api/users", usersRouter);
app.use("/report", reportRouter);
app.use(middleWares.unKnownEndPoint);

module.exports = app;
