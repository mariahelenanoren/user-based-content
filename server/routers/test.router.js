const express = require("express");
const TestModel = require("../models/test.model");
const router = express.Router();

router.get("/api/test", async (req, res) => {
  const docs = await TestModel.find({});
  res.status(200).json(docs);
});

router.post("/api/test", async (req, res) => {
  const doc = await TestModel.create(req.body);
  res.status(201).json(doc);
});

module.exports = router;
