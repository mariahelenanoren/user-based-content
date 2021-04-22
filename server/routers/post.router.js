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
    return status(401).json("You are must login to create a post");
  }
  const body = { ...req.body, user: req.session.user };
  const doc = await PostModel.create(body);
  res.status(201).json(doc);
});

module.exports = router;
