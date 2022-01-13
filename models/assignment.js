const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  title: { type: String, enum: ["assignment1", "assignment2", "assignment3"] },
  linkOfSlide: String,
  linkOfReport: String,
});

module.exports = mongoose.model("assignment", assignmentSchema);
