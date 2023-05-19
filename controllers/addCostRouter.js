const addCost = require("express").Router();
const Costs = require("../models/costs");



addCost.post("/", async (req, res, next) => {
    return res.status(201);
})



module.exports = addCost;