const addCost = require("express").Router();
const Cost = require("../models/costs");
const User = require("../models/users");
const { assertProps } = require("../utilities/middleware");
const Report = require("../models/report");
//This is basic post route for new cost
addCost.post("/", assertProps, async (req, res, next) => {
  try {
    // Extract the required properties from the request body
    const { month, day, year, user_id } = req.body;

    // Check if the user exists
    const user = await User.findOne({ id: user_id });
    if (!user) return res.status(400).json({ error: "user not exist" });

    // Create a new Cost object with the request body
    const cost = new Cost(req.body);

    // Save the cost object to the database
    await cost.save();

    // Delete the existing report for the specified year, month, and user (Approximation)
    await Report.deleteOne({ year, month, user_id });

    // Return the created cost object as the response
    return res.status(201).json(cost);
  } catch (e) {
    res.status(400).json({ error: "Something went wrong..." });
  }
});

// GET route to fetch all costs
addCost.get("/", async (req, res, next) => {
  try {
    // Retrieve all costs from the database
    const costs = await Cost.find({});

    // Return the costs as the response
    return res.status(200).json(costs);
  } catch (e) {
    return res.status(400).json({ error: "Something went wrong..." });
  }
});

// DELETE route to delete all costs and reports
addCost.delete("/", async (req, res, next) => {
  try {
    // Delete all documents from the Cost collection
    await Cost.deleteMany();

    // Delete all documents from the Report collection
    await Report.deleteMany();

    // Return a success response
    return res.status(200).json({ updated: true });
  } catch (e) {
    return res.status(400).json({ updated: false });
  }
});

module.exports = addCost;
