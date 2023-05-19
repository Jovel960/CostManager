const addCost = require("express").Router();
const Cost = require("../models/costs");
const { assertProps } = require("../utilities/middleware");

addCost.post("/", assertProps, async (req, res, next) => {
  try {
    const cost = new Cost(req.body);
    await cost.save();
    return res.status(201).json(cost);
  } catch (e) {
    next();
  }
});

addCost.get("/", async (req, res, next) => {
  try {
    const costs = await Cost.find({});
    return res.status(200).json(costs);
  } catch (e) {
    next();
  }
});

module.exports = addCost;
