const jwt = require("jsonwebtoken");
const User = require("../models/User");


// Provide users
const provideUsers = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "interviewTracker123", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.allUsers = null;
        next();
      } else {
        allUsers = await User.find({});
        res.locals.allUsers = allUsers;

        next();
      }
    });
  } else {
    res.locals.allUsers = null;
    next();
  }
};

module.exports = provideUsers;