const router = require("express").Router();
const mongojs = require("mongojs");

const Workout = require("../models/workout");



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

router.post("/api/workouts", (req, res) => {
  Workout.insertOne(req.body, (err, data) => {
    if (err){
      res.send(err)
    } else{
      
      res.send("posted" + data);
    }
  })
})

router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)
    },
    {
      $push: {
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance

      }
    },
  ).then(dataDB => {
    res.json(dataDB)
    console.log("data inserted: " + dataDB);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});



module.exports = router;