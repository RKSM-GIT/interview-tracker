const User = require("../models/User");
const jwt = require("jsonwebtoken");


//Handle Error Function
const handleError = (err) => {
  console.log(err.message, err.code);
  let errors = { name: "", email: "", password: "" };

  //Incorrect Email
  if (err.message === "Incorrect email") {
    errors.email = "That email is not registered";
  }

  //Incorrect Password
  if (err.message === "Incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    //Duplicate Email Error
    errors.email = "Email Already Registered";
    return errors;
  }

  //Validation Errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};


//createToken function
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "interviewTracker123", { expiresIn: maxAge });
};

//Related to authRoutes
module.exports.signup_get = (req, res) => {
  res.render("signup.ejs");
};

module.exports.login_get = (req, res) => {
  res.render("login.ejs");
};

module.exports.signup_post = async (req, res) => {
  const {name, email, password, year, branch, about, pic} = req.body;

  try {
    const user = await User.create({ name, email, password, year, branch, about,pic});
    const token = createToken(user._id);

    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * maxAge });
    res.status(201).json({ user: user._id });
  } catch (err) {
    let errors = handleError(err);
    res.status(400).send({ errors });
  }
};

module.exports.signupIMG_post = async (req,res) => {
  res.status(201).json({ img: req.file.filename });
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * maxAge });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).send({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
