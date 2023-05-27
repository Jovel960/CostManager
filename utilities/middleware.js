const moment = require("moment");

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
const assertProps = (req, res, next) => {
  if (
    !req.body.year ||
    !req.body.day ||
    !req.body.description ||
    !req.body.category ||
    !req.body.sum ||
    !req.body.month
  ) {
    if (!req.body.user_id) {
      return res.status(400).json({ error: "user id is missing" });
    } else {
      res.status(400).json({ error: "some property is missing" });
    }
  } else next();
};

module.exports = { unKnownEndPoint, assertProps, assertBirthDay };
