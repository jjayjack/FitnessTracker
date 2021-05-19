const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const strengthSchema = new Schema({
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
  weight: {
      type: Number,
      required: "Enter the weight used for the exercise"
  },
  reps: {
      type: Number,
      required: "Enter number of reps for the exercise"
  },
  sets: {
      type: Number,
      required: "Enter number of sets for the exercise"
  }
});

const Strength = mongoose.model("Strength", strengthSchema);

module.exports = Strength;