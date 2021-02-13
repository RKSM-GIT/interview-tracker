const Not_approved_que = require("../models/Not_approved_que");
//const Approved_que = require("../models/Approved_que");
const mongoose = require("mongoose");

//Get Requests
module.exports.prep_get = (req, res) => {
  res.render("dashboard.ejs");
};

module.exports.question_get = (req, res) => {
  res.render("questions.ejs", { top: req.params.topic });
};


//Post Requests
module.exports.question_post = async (req, res) => {
  const { topic ,name , website, url } = req.body;

  try{
    const updated = await  Not_approved_que.updateOne(
      {
        "_id": mongoose.Types.ObjectId("60158120f12f83724cf0741e"),
        "topics.title" : topic
      },
      {
        "$push" : 
        {
          "topics.$.questions" : 
          {
            "name" : name,
            "platform" : website,
            "link" : url         
          }
        }
      }
    );

    // const db = await Not_approved_que.findOne({_id:mongoose.Types.ObjectId("60158120f12f83724cf0741e")});
    // console.log(db);
    // console.log(topic,name,website,url);

  } catch (err){
    console.log(err);
  }

  res.status(201).send({});
};

/*
{
    "_id": {
        "$oid": "60159f78f12f83724cf07423"
    },
    "topics": [{
        "title": "Arrays",
        "questions": [{
            "_id": {
                "$oid": "601587dd05fc772ec06e7b5c"
            },
            "name": "jump game",
            "platform": "leetcode",
            "link": "https://leetcode.com/problems/jump-game/"
        }]
    }, {
        "title": "Searching & Sorting",
        "questions": []
    }, {
        "title": "Matrix",
        "questions": []
    }, {
        "title": "Strings",
        "questions": []
    }, {
        "title": "Hashing",
        "questions": []
    }, {
        "title": "Linked List",
        "questions": []
    }, {
        "title": "Stack",
        "questions": []
    }, {
        "title": "Queue",
        "questions": []
    }, {
        "title": "Trees",
        "questions": []
    }, {
        "title": "Heaps",
        "questions": []
    }, {
        "title": "Graphs",
        "questions": []
    }, {
        "title": "Greedy Algorithms",
        "questions": []
    }, {
        "title": "Dynamic Programming",
        "questions": []
    }, {
        "title": "Other",
        "questions": []
    }, {
        "title": "Bit Manipulation",
        "questions": []
    }, {
        "title": "Recursion/Backtracking",
        "questions": []
    }]
}
*/