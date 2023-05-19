const unKnownEndPoint = (req, res) =>
  res.status(404).json({ error: "unknown end point" });

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

module.exports = { unKnownEndPoint, assertProps };
