const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: String,
  platform: String,
  link: String,
});

const topicsSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
});

const Not_approved_queSchema = new mongoose.Schema({
  topics: [topicsSchema],
});

const Not_approved_que = mongoose.model("not_approved_que", Not_approved_queSchema);

module.exports = Not_approved_que;
