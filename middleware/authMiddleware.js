const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Approved_que = require("../models/Approved_que");
const Not_approved_que = require("../models/Not_approved_que");
const Approved_exp = require("../models/Approved_exp");
const mongoose = require("mongoose");

// Protecting the Routes
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "interviewTracker123", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        //console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

let user;
// Checking Current User
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "interviewTracker123", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        res.locals.approved_que = null;
        next();
      } else {
        user = await User.findById(decodedToken.id);
        let approved_que = await Approved_que.findOne({_id: mongoose.Types.ObjectId("601538a2f12f83724cf0741a")});
        let not_approved_que = await Not_approved_que.findOne({_id: mongoose.Types.ObjectId("60158120f12f83724cf0741e")});
        let approved_exp = await Approved_exp.findOne({"type" : true});
        res.locals.user = user;
        res.locals.approved_que = approved_que;
        res.locals.not_approved_que = not_approved_que;
        res.locals.exp = approved_exp;
        next();
      }
    });
  } else {
    res.locals.user = null;
    res.locals.approved_que = null;
    next();
  }
};

// Protect Admin Routes
const checkAdmin = (req, res, next) => {
  if(user.isAdmin){
    next();
  }else {
    res.redirect("/na");
  }
};


module.exports = { requireAuth, checkUser, checkAdmin };
