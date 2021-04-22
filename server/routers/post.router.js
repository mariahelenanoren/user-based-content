const express = require("express");
const PostModel = require("../models/post.model");
const router = express.Router();

router.get("/api/post", async (req, res) => {
  const docs = await PostModel.find({});
  res.status(200).json(docs);
});

router.post("/api/post", async (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.status(401).json("You must login to create a post");
  }
  const body = { ...req.body, user: req.session.user };
  const doc = await PostModel.create(body);
  res.status(201).json("Post created");
});

router.put("/api/post", async (req, res) => {
  const doc = await PostModel.updateOne(req.body.id);
  res.status(200).json("Update post successful");
});

router.delete("/api/post", async (req, res) => {
  const doc = await PostModel.deleteOne(req.body.id);
  res.status(200).json("Delete post successful");
});

module.exports = router;
