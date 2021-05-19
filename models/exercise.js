const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a type for exercise",
  },
  name: {
    type: String,
    required: "Enter a name for the exercise"
  },
  duration: {
    type: Number,
    required: "Enter amount of time",
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;