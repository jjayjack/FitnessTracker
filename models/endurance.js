const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const enduranceSchema = new Schema({
  distance: {
      type: Number,
      required: "Enter the distance traveled during the exercise"
  }
});

const Endurance = mongoose.model("Endurance", enduranceSchema);

module.exports = Endurance;