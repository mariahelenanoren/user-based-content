const express = require("express");
const PostModel = require("../models/post.model");
const router = express.Router();

router.get("/api/post", async (req, res) => {
  const docs = await PostModel.find({});
  res.status(200).json(docs);
});

router.get("/api/post/:id", async (req, res) => {
  const { _id } = req.body;
  const docs = await PostModel.find({ _id: _id });
  res.status(200).json(docs);
});

router.post("/api/post", async (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json("You must login to create a post");
  }
  const body = { ...req.body, user: req.session.user };
  const doc = await PostModel.create(body);
  res.status(201).json("New post created");
});

router.use((req, res, next) => {
  const { user, role } = req.session;
  if (req.user !== user && role !== "admin") {
    return res.status(403).json("Access denied");
  }
  next();
});

router.put("/api/post/:id", async (req, res) => {
  const { _id, text } = req.body;
  const doc = await PostModel.updateOne({ _id: _id }, { text: text });
  res.status(201).json("Post successfully updated");
});

router.delete("/api/post/:id", async (req, res) => {
  const { _id } = req.body;
  const doc = await PostModel.deleteOne({ _id: _id });
  res.status(201).json("Post successfully deleted");
});

module.exports = router;
