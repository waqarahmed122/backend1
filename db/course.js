const mongoose = require("mongoose");

const courseschema = new mongoose.Schema({
  courses: String,
  // university: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "universities",
  // },

  // university:[universityschema]
});
module.exports = mongoose.model("courses", courseschema);
//how to use post APIs in angular to add data in angular forms save in mongodb?