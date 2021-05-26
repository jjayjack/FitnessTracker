const router = require("express").Router();
const mongojs = require("mongojs");
const Workout = require("../models/workout");



router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err)
    });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
  // want to display days, workouts
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    })
})

router.post('/api/workouts/', (req, res) => {
  Workout.findOneAndUpdate({},
    {
      $set:{}
    }).then(newWorkout => {
      console.log(newWorkout);
        res.json(newWorkout)
        
      })
      .catch(err => {
        res.status(400).json(err);
      })
})

router.put('/api/workouts/:id', (req, res) => {
  Workout.updateOne({
    _id: mongojs.ObjectId(req.params.id)
    },
    {
      $push: {
        exercises: {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets,
          distance: req.body.distance
        }
      }
    },
  ).then(dataDB => {
    console.log(dataDB)
    res.json(dataDB)
  })
  .catch(err => {
    res.status(400).json(err);
  })
});



module.exports = router;