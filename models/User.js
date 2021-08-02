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


// Seed Data
/* [
  {
    email: "1234abcd@gmail.com",
    password: "password",
    username: "User 1",
    avatar: "https://picsum.photos/200",
    fullName: "John Smith"
  },
  {
    email: "1234abcd@gmail.com",
    password: "password",
    username: "User 2",
    avatar: "https://picsum.photos/200",
    fullName: "Sam Smith"
  },
  {
    email: "1234abcd@gmail.com",
    password: "password",
    username: "User 3",
    avatar: "https://picsum.photos/200",
    fullName: "Will Smith"
  },
] */