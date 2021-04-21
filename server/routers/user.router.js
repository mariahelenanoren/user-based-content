const express = require("express");
const UserModel = require("../models/user.model");
const router = express.Router();

router.get("/api/user", async (req, res) => {
  const docs = await UserModel.find({});
  res.status(200).json(docs);
});

router.post("/api/user", async (req, res) => {
  const doc = await UserModel.create(req.body);
  res.status(201).json(doc);
});

module.exports = router;
