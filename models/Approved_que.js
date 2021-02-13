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

const Approved_queSchema = new mongoose.Schema({
  topics: [topicsSchema],
});

const Approved_que = mongoose.model("approved_que", Approved_queSchema);

module.exports = Approved_que;
