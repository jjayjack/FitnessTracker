const router = require("express").Router();

const Endurance = require("../models/endurance.js");
const Strength = require ("../models/strength.js");
const Exercise = require("../models/exercise.js");


router.get("/api/workouts", (req,res) =>{
  console.log("last exercise button pressed");
  res.render('public/exercise.html')
})

router.get("/exercise", (req, res) => {
  console.log("exercise?");
    res.render('public/exercise.html')
  })


module.exports = router;