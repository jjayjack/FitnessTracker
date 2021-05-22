const router = require("express").Router();

const Endurance = require("../models/endurance.js");
const Strength = require ("../models/strength.js");
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});






module.exports = router;