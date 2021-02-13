const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/IT_Routes");
const cookieParser = require("cookie-parser");

const app = express();


// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://user123:test123@node-practice.rubk6.mongodb.net/Interview_Tracker";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.use(routes);
// app.get('*', function(req, res){
//   res.redirect("/404");
// });