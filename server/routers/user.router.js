const express = require("express");
const UserModel = require("../models/user.model");
const router = express.Router();

router.get("/api/user", async (req, res) => {
  const docs = await UserModel.find({});
  res.status(200).json(docs);
});

router.get("/api/user/:id", async (req, res) => {
  const { _id } = req.body;
  const doc = await UserModel.find({ _id: _id });
  res.status(200).json(doc);
});

router.post("/api/register", async (req, res) => {
  const { userName } = req.body;
  const users = await UserModel.find({});
  const existingUser = users.find((u) => u.userName === userName);

  if (existingUser) {
    return res.status(400).json("Username is already in use");
  }

  const doc = await UserModel.create(req.body);
  res.status(201).json("Registration successful");
});

router.post("/api/login", async (req, res) => {
  const { userName, password } = req.body;
  const users = await UserModel.find({});
  const user = users.find((u) => u.userName === userName);

  if (!user || password !== user.password) {
    res.status(401).json("Incorrect password or username");
    return;
  }

  req.session.user = user._id;
  req.session.userName = user.userName;
  req.session.role = user.role;

  res.status(200).json("Login successful");
});

router.delete("/api/logout", (req, res) => {
  if (!req.session.user) {
    return res.status(400).json("You are already logged out");
  }

  req.session = null;
  res.status(200).json("Logout successful");
});

router.use((req, res, next) => {
  if (req.session.role !== "admin") {
    return res.status(403).json("Access denied");
  }
  next();
});

router.put("/api/user/:id", async (req, res) => {
  const { role, _id } = req.body;
  const doc = await UserModel.updateOne({ _id: _id }, { role: role });
  res.status(200).json("User role successfully updated");
});

router.delete("/api/user/:id", async (req, res) => {
  const { _id } = req.body;
  const doc = await UserModel.deleteOne({ _id: _id });
  res.status(200).json("User successfully deleted");
});

module.exports = router;
