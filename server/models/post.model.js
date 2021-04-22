const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: { type: "String", required: true }, //ObjectId?
  text: { type: "String", required: true },
});

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;