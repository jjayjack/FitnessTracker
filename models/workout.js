const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercises: [
      {
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
          },
          distance: {
            type: Number,
            required: "Enter the distance traveled during the exercise"
          }
      }
  ]
});

workoutSchema.virtual('totalDuration').
get(function() {
    var total = this.exercises.reduce(function (total, current) {
        return total + current.duration;
    }, 0)
    return total; 
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;