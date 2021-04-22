const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  _user: { type: Schema.Types.ObjectId, ref: "user" },
  text: { type: "String", required: true },
});

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;