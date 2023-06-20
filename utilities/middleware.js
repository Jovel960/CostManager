// Yovel Hadad 207125329 Yarin Rahamim 205833668

const moment = require("moment");

//Unknow endpoint middleware
const unKnownEndPoint = (req, res) =>
  res.status(404).json({ error: "unknown end point" });

// Validate and parse the birthday string using moment.js
const assertBirthDay = (req, res, next) => {
  const { birthday } = req.body;
  const parsedBirthday = moment(birthday, "MMMM, Do, YYYY");
  if (!parsedBirthday.isValid()) {
    return res.status(400).json({
      error:
        "Invalid birthday format. Please provide the date in DD/MM/YYYY format.",
    });
  }
  req.body.birthday = parsedBirthday.format("YYYY-MM-DD");
  next();
};

module.exports = { unKnownEndPoint, assertBirthDay };
