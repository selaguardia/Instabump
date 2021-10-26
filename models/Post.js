const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  caption: {
    type: String,
    required: [true, "You must provide a caption."],
  },
  image: {
    type: String,
    required: [true, "You must add an image."]
  },
  bumpCount: [{
    type: mongoose.Types.ObjectId,
    ref: "User",
  }],
  isPinned: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  }
},
  {timestamps: true}
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;