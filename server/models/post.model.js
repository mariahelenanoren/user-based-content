const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "user" },
  text: "String",
});

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;
