const express = require('express');
const PostModel = require('../models/post.model');
const router = express.Router();

/* Gets all the posts */
router.get('/api/posts', async (req, res) => {
	const docs = await PostModel.find({}).sort({ _id: -1 });
	res.status(200).json(docs);
});

/* Gets a post */
router.get('/api/post/:id', async (req, res) => {
	const { _id } = req.body;
	const docs = await PostModel.find({ _id: _id });
	res.status(200).json(docs);
});

/* Gets current session user's posts */
router.get('/api/posts/user', async (req, res) => {
	const user = req.session.user;
	const docs = await PostModel.find({ _user: user }).sort({ _id: -1 });
	res.status(200).json(docs);
});

/* Creates a new post, only if the user is logged in */
router.post('/api/post', async (req, res) => {
	const { user } = req.session;
	const { text } = req.body;
	if (!user) {
		return res.status(401).json('You must login to create a post');
	}
	const body = {
		text: text,
		_user: req.session.user,
		userName: req.session.userName,
	};
	const doc = await PostModel.create(body);
	res.status(201).json('New post created');
});

/* Middleware which checks if the the user which calls
the endpoint is the user stored in the post or has the 
role of admin */
router.use('/api/post/:id', (req, res, next) => {
	const { user, role } = req.session;
	if (req.body._user !== user && role !== 'admin') {
		return res.status(403).json('Access denied');
	}
	next();
});

/* Updates a post */
router.put('/api/post/:id', async (req, res) => {
	const { _id, text } = req.body;
	const doc = await PostModel.updateOne({ _id: _id }, { text: text });
	res.status(201).json('Post successfully updated');
});

/* Deletes a post */
router.delete('/api/post/:id', async (req, res) => {
	const { _id } = req.body;
	const doc = await PostModel.deleteOne({ _id: _id });
	res.status(201).json('Post successfully deleted');
});

module.exports = router;
