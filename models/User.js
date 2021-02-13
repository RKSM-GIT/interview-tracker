const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a Name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an Email"],
    unique: true,
    lowercase: true,
    validate: isEmail,
  },
  password: {
    type: String,
    required: [true, "Please enter a Password"],
    minlength: [8, "Password must be atleast 8 character long"],
  },
  isAdmin: {
    type: Boolean,
    default : false
  },
  year: String,
  branch: String,
  about: {
    type : String,
    default: ""
  },
  pic: {type: String, default: "/img/users/default1805.png"},
  experiences: [{ type: String, ref: 'approved_exp', default: [] }],
});

// Encrypting the password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Static function for Login
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect email");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
