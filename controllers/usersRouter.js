// Yovel Hadad 207125329 Yarin Rahamim 205833668

const usersRouter = require("express").Router();
const User = require("../models/users");
const Cost = require("../models/costs");
const Report = require("../models/report");
const middleWares = require("../utilities/middleware");

// GET route to fetch all users
usersRouter.get("/", async (req, res, next) => {
  try {
    // Retrieve all users from the database
    const users = await User.find({});

    // Return the users as the response
    return res.status(200).json(users);
  } catch {
    return res.status(400).json({ error: "Something went wrong..." });
  }
});

// DELETE route to delete all users, costs, and reports
usersRouter.delete("/", async (req, res, next) => {
  try {
    // Delete all documents from the User collection
    await User.deleteMany();

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

// POST route to create a new user
usersRouter.post("/", middleWares.assertBirthDay, async (req, res) => {
  // Extract the required properties from the request body
  const { id, first_name, last_name, birthday } = req.body;
  try {
    // Check if a user with the given id already exists
    const result = await User.findOne({ id });
    if (result) {
      return res.status(400).json({ error: "user id must be uniqe" });
    } else {
      // Create a new user document with the validated and parsed birthday
      const user = new User({
        id,
        first_name,
        last_name,
        birthday: birthday,
      });
      await user.save();
      return res.status(201).json(user);
    }
  } catch (e) {
    return res.status(400).json({ error: "Something went wrong..." });
  }
});

module.exports = usersRouter;
