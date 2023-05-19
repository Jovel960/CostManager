const aboutRouter = require("express").Router();

aboutRouter.get("/", (req, res, next) => {
  res.status(200).json([
    {
      firstname: "yovel",
      lastname: "hadad",
      id: 207125329,
      email: "jovel960@icloud.com",
    },
    {
      firstname: "yarin",
      lastname: "rahamim",
      id: 34534544,
      email: "",
    },
  ]);
});

module.exports = aboutRouter;
