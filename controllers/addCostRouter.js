const addCost = require("express").Router();
const Cost = require("../models/costs");
const User = require("../models/users");
const { assertProps } = require("../utilities/middleware");
const Report = require("../models/report");

addCost.post("/", assertProps, async (req, res, next) => {
  try {
    const { month, day, year, user_id } = req.body;
    const user = await User.findOne({ id: user_id });
    if (!user) return res.status(400).json({ error: "user not exist" });
    const cost = new Cost(req.body);
    await cost.save();
    const report = await Report.deleteOne({ year, month, user_id });
    return res.status(201).json(cost);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong..." });
  }
});

addCost.get("/", async (req, res, next) => {
  try {
    const costs = await Cost.find({});
    return res.status(200).json(costs);
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong..." });
  }
});

addCost.delete("/", async (req, res, next) => {
  try {
    await Cost.deleteMany();
    return res.status(200).json({ updated: true });
  } catch (e) {
    return res.status(500).json({ updated: false });
  }
});

module.exports = addCost;
