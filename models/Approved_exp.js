const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  approved : {type:Boolean, default: false},
  title : String,
  author: { type: String, ref: 'user' , default: ""},
  experience: String,
  code: String
});

const companySchema = new mongoose.Schema({
  companyName: String,
  experiences: [experienceSchema],
});

const Approved_expSchema = new mongoose.Schema({
  type : {
    type : Boolean,
    default : true,
  },
  companies: [companySchema],
});

const Approved_exp = mongoose.model("approved_exp", Approved_expSchema);

module.exports = Approved_exp;
