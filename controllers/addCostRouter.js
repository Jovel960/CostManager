const addCost = require("express").Router();
const Cost = require("../models/costs");
const User = require("../models/users");
const { assertProps } = require("../utilities/middleware");

addCost.post("/", assertProps, async (req, res, next) => {
  try {
    const user = await User.findOne({ user_id: req.body.user_id });
    if (!user) return res.status(400).json({ error: "user not exist" });
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

addCost.delete("/", async (req, res, next) => {
  try {
    const costs = await Cost.deleteMany();
    return res.status(200).json({ updated: true });
  } catch (e) {
    return res.status(400).json({ updated: false });
  }
});

module.exports = addCost;
