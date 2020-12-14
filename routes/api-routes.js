const express = require('express');
const Workout = require('../models/workout.js');

module.exports = function (app) {
  // middleware that is specific to this router
  app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  app.get('/api/workouts', (req, res) => {
    Workout.find()
      .then((workoutsDB) => {
        res.json(workoutsDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post('/api/workouts', (req, res) => {
    Workout.create({})
      .then((workoutsDB) => {
        res.json(workoutsDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },

      { new: true, runValidators: true }
    )
      .then((workoutsDB) => {
        res.json(workoutsDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get('/api/workouts/range', (req, res) => {
    Workout.find({})
      .then((workoutsDB) => {
        res.json(workoutsDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
