const router = require("express").Router();
const Endurance = require("../models/endurance.js");
const Strength = require ("../models/strength.js");
const Exercise = require("../models/exercise.js");

router.post("/api/endurance", ({ body }, res) => {
  Endurance.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.post("/api/strength", ({ body }, res) => {
  Strength.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;