const usersRouter = require("express").Router();
const User = require("../models/users");
const middleWares = require("../utilities/middleware");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch {
    next();
  }
});

usersRouter.delete("/", async (req, res, next) => {
  try {
    await User.deleteMany();
    return res.status(200).json({ updated: true });
  } catch (e) {
    return res.status(400).json({ updated: false });
  }
});

usersRouter.post("/", middleWares.assertBirthDay, async (req, res) => {
  const { id, first_name, last_name, birthday } = req.body;
  try {
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
    console.log(e);
    return res.status(400).json(e);
  }
});

module.exports = usersRouter;
