const express = require("express");
const PostModel = require("../models/post.model");
const router = express.Router();

router.get("/api/post", async (req, res) => {
  const docs = await PostModel.find({});
  res.status(200).json(docs);
});

router.post("/api/post", async (req, res) => {
  const doc = await PostModel.create(req.body);
  res.status(201).json(doc);
});

router.put("/api/post", async (req, res) => {
  const doc = await PostModel.updateOne(req.body);
  res.status(201).json(doc);
});

router.delete("/api/post", async (req, res) => {
  const doc = await PostModel.deleteOne(req.body);
  res.status(201).json(doc);
});

module.exports = router;
