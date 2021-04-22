const express = require("express");
const UserModel = require("../models/user.model");
const router = express.Router();

router.get("/api/user", async (req, res) => {
  const docs = await UserModel.find({});
  res.status(200).json(docs);
});

router.post("/api/user", async (req, res) => {
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

module.exports = router;
