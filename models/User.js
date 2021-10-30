const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Pin Limit Validator
// function pinLimit(val) {
//   return val.length <= 3;
// }

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
    required: [true, "Please provide a username."],
    unique: true,
  },
  avatar: {
    type: String,
    default: "https://picsum.photos/200",
  },
  pinnedPosts: [{
    type: mongoose.Types.ObjectId,
    ref: "Post",
  }],
  // pinnedPosts: {
  //   type: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Post",
  //   }],
  //   validate: [pinLimit, 'You have a maximum of 3 posts pinned at any time.']
  // },
fullName: {
  type: String,
  required: [true, "Please enter your full name."]
}
},
{timestamps: true}
);


const User = mongoose.model("User", userSchema);

module.exports = User;