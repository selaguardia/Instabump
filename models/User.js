const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email address."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
  },
  username: {
    type: String,
    required: [true, "Choose a user name."],
    unique: true,
  },
  avatar: {
    type: String,
    default: "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg",
  },
  fullName: {
    type: String,
    required: [true, "Please enter your full name."]
  }
},
  {
    timestamps: true
  
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
