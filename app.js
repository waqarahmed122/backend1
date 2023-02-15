const express = require("express");
const cors = require("cors");
const app = express();
require("./db/config");
const course = require("./db/course");
const university = require("./db/university");
const student = require("./db/student");
const port = 3000;
app.use(express.json());
app.use(cors());
// const DBconnect= async()=>{
//     let movies=[];
//
//     mongoose.connect("mongodb://127.0.0.1:27017/usman");
//     const courseschme=new mongoose.Schema({
//         course:String
//     });
//     const course=mongoose.model("usman",courseschme);
//     const data= await course.find();
//     console.log(data);
// }
// DBconnect();

app.post("/c", async (req, res) => {
  let user = new course(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/uni", async (req, res) => {
  let user = new university(req.body);
  let uniresult = await user.save();
  res.send(uniresult);
});
app.post("/student", async (req, res) => {
  let user = new student(req.body);
  let result = await user.save();
  res.send(result);
});
app.get("/university", async (req, res) => {
  let University = await university.find().populate("courses");
  res.send(University);
  // console.log("university", University?.Course);
});

// Story.findOne({ title: "Bob goes sledding" })
//   .populate("author") // This populates the author id with actual author information!
//   .exec((err, story) => {
//     if (err) return handleError(err);
//     console.log("The author is %s", story.author.name);
//     // prints "The author is Bob Smith"
//   });

app.get("/cc", async (req, res) => {
  let Course = await course.find();
  res.send(Course);
});
//
app.get("/st", async (req, res) => {
  let Student = await student.find().populate("courses");
  res.send(Student);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// what is moon?