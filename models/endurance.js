const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const enduranceSchema = new Schema({
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
  distance: {
      type: Number,
      required: "Enter the weight used for the exercise"
  }
});

const Endurance = mongoose.model("Endurance", enduranceSchema);

module.exports = Endurance;