const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
	_user: { type: Schema.Types.ObjectId, ref: 'user' },
	userName: { type: 'String', required: true },
	text: { type: 'String', required: true },
});

const PostModel = mongoose.model('post', PostSchema);
module.exports = PostModel;
