const express = require('express');
const mongoose = require("mongoose");
const aboutRouter = require("./controllers/abous");
const app = express();
const middleWares = require("./utilities/middleware");

app.use(express.json());
app.use('/about', aboutRouter);
app.use(middleWares.unKnownEndPoint)

module.exports = app;
