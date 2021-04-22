const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  text: String,
});

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;