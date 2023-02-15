const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
  student: String,
  university: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
});
module.exports = mongoose.model("students", studentschema);
