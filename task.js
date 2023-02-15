const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
const mongoDB = "mongodb://127.0.0.1:27017/usman";
mongoose.set("strictQuery", false);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const da = mongoose.connection;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
let people = [];
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const db = client.db("usman");
// const coll = db.collection("usman");
// const coursecoll = db.collection("course");

// const universitycoll = db.collection("university");

// const studentcoll = db.collection("student");

const university = new mongoose.Schema({
  university: String,
  course: { type: mongoose.Types.ObjectId, ref: "course" },
});

const uni = mongoose.model("university", university);

app.get("/university", async (req, res) => {
  let movies = [];
  await db.course
    .find({})
    .populate("course")
    .sort({ name: 1 })
    .forEach((movie) => movies.push(movie))
    .then(() => {
      res.status(200).json(movies);
    })
    .catch(() => {
      res.status(500).json({ error: "server error" });
    });
});

// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
