const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: "String", required: true, unique: true },
  password: { type: "String", required: true },
  firstName: { type: "String", required: true },
  lastName: { type: "String", required: true },
  email: { type: "String", required: true, unique: true },
  role: { type: "String", required: true },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
