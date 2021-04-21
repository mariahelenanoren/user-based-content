const express = require("express");
const mongoose = require("mongoose");
require("express-async-errors");
const testRouter = require("./routers/test.router.js");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hej");
});
app.use(testRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json(err.message);
});

(async function run() {
  try {
    await mongoose.connect("mongodb://localhost:27017/postr", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.error(error);
  }

  app.listen(5000, () => {
    console.log("Server is running");
  });
})();
