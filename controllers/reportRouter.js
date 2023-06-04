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

    // Check if the user exists
    if (!isUser)
      return res.status(400).json({
        error: "user is not exist",
      });

    // Check if a report already exists for the specified year, month, and user to prevent another calculation (Approximation)
    const report = await Report.findOne({ year, month, user_id });
    if (report) {
      // If a report exists, clean the the user_id, day, month, year properties and return it as the response
      const cleanedReport = cleanUserReport(report);
      return res.status(200).json(cleanedReport);
    } else {
      // If a report does not exist, clean the user costs id and more properties and generate a new report
      const userCosts = await Cost.find({ year, month });
      const cleanedCosts = cleanUserCosts(userCosts);
      const userReport = reportForUser(cleanedCosts);

      // Create a new report document and save it to the database
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

      // Return the generated user report as the response
      res.status(200).json(userReport);
    }
  } catch (e) {
    return res.status(400).json({ error: "Something went wrong..." });
  }
});

module.exports = reportRouter;
