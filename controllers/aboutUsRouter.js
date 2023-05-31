const aboutRouter = require("express").Router();
//Basic about route using get method returns an object with the developers info
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
      id: 205833668,
      email: "Yarin1996@outlook.co.il",
    },
  ]);
});

module.exports = aboutRouter;
