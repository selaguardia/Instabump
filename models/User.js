const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
},
  {
    timestamps: true
  
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;