const router = require("express").Router();
const Endurance = require("../models/endurance.js");
const Strength = require ("../models/strength.js");
const Exercise = require("../models/exercise.js");

router.post("/api/workouts/endurance", ({ body }, res) => {
  Endurance.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.post("/api/workouts/strength", ({ body }, res) => {
  Strength.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/exercise", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/exercise?", (req, res) => {
  res.render('/exercise'); 
})

module.exports = router;