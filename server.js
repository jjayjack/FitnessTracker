const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000

const Workout = require('./models/exercise.js')
const app = express();

const databaseUrl = "workout";
const collections = ["endurance", "strength"];

const db = mongojs(databaseUrl, collections);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get('/exercise', (req, res) => {
  db.exercise.find({}, (err, found) => {
    if (err){
      console.log(err);
    } else {
      res.json(found);
    }
  })
})

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
