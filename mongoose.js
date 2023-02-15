const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

// mongoose.set("strictQuery", false);
// mongoose.connect("mongodb://localhost:27017/usman");
const DBconnect = async () => {
  mongoose.set("strictQuery", true);
  mongoose.connect("mongodb://127.0.0.1:27017/enrollment");
  const courseschme = new mongoose.Schema({});
  const course = mongoose.model("courses", courseschme);
  const data = await course.find();
  console.log("data", data);
};
DBconnect();

const getdata = async () => {
  mongoose.set("strictQuery", true);
  mongoose.connect("mongodb://127.0.0.1:27017/usman");
  const universityschme = new mongoose.Schema({});
  const uni = mongoose.model("University", universityschme);
  const data = await uni.find();
  console.log("data", data);
};
// // DBconnect();
getdata();
// app.listen(5000);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
