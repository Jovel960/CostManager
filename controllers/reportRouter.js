const reportRouter = require("express").Router();
const User = require("../models/users");
const Cost = require("../models/costs");
const { reportForUser, cleanUserCosts } = require("../utilities/helpers");

reportRouter.get("/", async (req, res, next) => {
  const { year, month, user_id } = req.query;
  try {
    const isUser = await User.findOne({ id: user_id });
    const userCosts = await Cost.find({ year, month })
    if (!isUser)
      return res.status(400).json({
        error: "user is not exist",
      });
    const cleanedCosts = cleanUserCosts(userCosts);
    const userReport = reportForUser(cleanedCosts);
    console.log(userReport);
    res.status(200).json(userReport);
  } catch (e) {
    console.log(e);
  }
});

module.exports = reportRouter;
