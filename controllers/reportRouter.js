const reportRouter = require("express").Router();
const User = require("../models/users");
const Cost = require("../models/costs");
const {
  reportForUser,
  cleanUserCosts,
  cleanUserReport,
} = require("../utilities/helpers");
const Report = require("../models/report");

reportRouter.get("/", async (req, res, next) => {
  const { year, month, user_id } = req.query;
  try {
    const isUser = await User.findOne({ id: user_id });
    const userCosts = await Cost.find({ year, month });
    if (!isUser)
      return res.status(400).json({
        error: "user is not exist",
      });
    const report = await Report.findOne({ year, month, user_id });
    if (report) {
        console.log("here");
      const cleanedReport = cleanUserReport(report);
      return res.status(200).json(cleanedReport);
    } else {
      const cleanedCosts = cleanUserCosts(userCosts);
      const userReport = reportForUser(cleanedCosts);
      const newUserReport = new Report({
        year,
        month,
        user_id,
        food: userReport.food,
        health: userReport.health,
        housing: userReport.housing,
        education: userReport.education,
        transportation: userReport.transportation,
        other: userReport.other,
      });
      await newUserReport.save();
      res.status(200).json(userReport);
    }
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong..." });
  }
});

module.exports = reportRouter;
