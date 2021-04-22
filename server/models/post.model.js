const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: String, //ObjectId?
  text: String,
});

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;