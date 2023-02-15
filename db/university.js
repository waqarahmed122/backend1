const mongoose = require("mongoose");

const universityschema = new mongoose.Schema({
  university: String,
  courses: [{ type: mongoose.Types.ObjectId, ref: "courses" }],

  // courses:[courseschema]
});
module.exports = mongoose.model("universities", universityschema);
