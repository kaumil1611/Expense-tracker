const jwt = require("jsonwebtoken");
const keys = process.env.JWT_PRIVATE_KEY;
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "you must be login" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, keys, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be login" });
    }
    const { _id } = payload;
    User.findById(_id).then((userData) => {
      req.user = userData;
      next();
    });
  });
};
