const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const userRouter = require('./routers/user.router.js');
const postRouter = require('./routers/post.router.js');
const app = express();
require('express-async-errors');

app.use(express.json());

app.use(
	cookieSession({
		name: 'session',
		secret: 's3ssionK3y',
		secure: false,
		maxAge: 1000 * 60 * 30,
		httpOnly: true,
	}),
);

app.use(postRouter);
app.use(userRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json(err.message);
});

(async function run() {
	try {
		await mongoose.connect('mongodb://localhost:27017/postr', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Database is connected');
	} catch (error) {
		console.error(error);
	}

	app.listen(5000, () => {
		console.log('Server is running');
	});
})();
