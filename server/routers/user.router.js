const express = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const router = express.Router();

/* Gets all the users */
router.get("/api/users", async (req, res) => {
  const docs = await UserModel.find({});
  res.status(200).json(docs);
});

/* Gets a user */
router.get("/api/user/:id", async (req, res) => {
  const { _id } = req.body;
  const doc = await UserModel.find({ _id: _id });
  res.status(200).json(doc);
});

/* Gets session user */
router.get("/api/user", async (req, res) => {
  const _id = req.session.user;
  if (_id) {
    const doc = await UserModel.find({ _id: _id });
    res.status(200).json(doc);
  } else {
    res.status(401).json(null);
  }
});

/* Registers a user, only if a user with that username does not already exists */
router.post("/api/register", async (req, res) => {
  const { userName, password } = req.body;
  const users = await UserModel.find({});
  const existingUser = users.find((u) => u.userName === userName);

  if (existingUser) {
    return res.status(400).json("Username is already in use");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const body = { ...req.body, password: hashedPassword };

  const doc = await UserModel.create(body);
  res.status(201).json("Registration successful");
});

/* Logs in a user, only if they are registered and the password is correct */
router.post("/api/login", async (req, res) => {
  const { userName, password } = req.body;
  const users = await UserModel.find({});
  const user = users.find((u) => u.userName === userName);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json("Incorrect password or username");
    return;
  }

  req.session.user = user._id;
  req.session.userName = user.userName;
  req.session.role = user.role;

  res.status(200).json("Login successful");
});

/* Logs out a user, only if they are logged in */
router.delete("/api/logout", (req, res) => {
  if (!req.session.user) {
    return res.status(400).json("You are already logged out");
  }

  req.session = null;
  res.status(200).json("Logout successful");
});

/* Middleware which checks if the user has the role of admin */
router.use((req, res, next) => {
  if (req.session.role !== "admin") {
    return res.status(403).json("Access denied");
  }
  next();
});

/* Updates a users role */
router.put("/api/user/:id", async (req, res) => {
  const { role, _id } = req.body;
  const doc = await UserModel.updateOne({ _id: _id }, { role: role });
  res.status(200).json("User role successfully updated");
});

/* Deletes a user */
router.delete("/api/user/:id", async (req, res) => {
  const { _id } = req.body;
  const doc = await UserModel.deleteOne({ _id: _id });
  res.status(200).json("User successfully deleted");
});

module.exports = router;
