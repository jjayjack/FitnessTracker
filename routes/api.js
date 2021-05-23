const router = require("express").Router();

const Endurance = require("../models/endurance.js");
const Strength = require ("../models/strength.js");
const Workout = require("../models/workout");
const Exercise = require("../models/exercise")


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err)
    });
});



module.exports = router;