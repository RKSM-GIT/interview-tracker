const User = require("../models/User");
const Approved_exp = require("../models/Approved_exp");

//Get Requests

module.exports.exp_get = (req, res) => {
  res.render("interview_Experience.ejs");
};

module.exports.expInner_get = (req, res) => {
  res.render("Interview_Exp_Inner",{ companyN: req.params.company });
};

//POST Resquest

module.exports.exp_post = async (req,res) => {
  const { companyName,title,experience,email } = req.body;
  const code = email + Date.now();
  //console.log(companyName,title,experience,email);
  try {
    const updateExp = await Approved_exp.updateOne(
      {
        "type": true,
        "companies.companyName" : companyName
      },
      {
        "$push" : 
        {
          "companies.$.experiences" : 
          {
            "approved" : false,
            "title" : title,
            "author" : email,
            "experience" : experience,
            "code" : code          
          }
        }
      }
    );

    const updateUser = await User.updateOne(
      {
        "email" : email
      },
      {
        "$push" : 
        {
          "experiences" : code
        }
      }
    );

  } catch(err) {
    console.log(err);
  }


  res.status(201).send({});
};