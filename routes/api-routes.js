const express = require('express');
const db = require('../models');

module.exports = function (app) {
  // TODO Is this needed?
  // middleware that is specific to this router
  app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  app.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([
      { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
    ])
      .then((workoutsDB) => {
        res.json(workoutsDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post('/api/workouts', (req, res) => {
    db.Workout.create({})
      .then((workoutsDB) => {
        res.json(workoutsDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put('/api/workouts/:id', ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
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
    db.Workout.aggregate([
      { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
    ])
      .then((workoutsDB) => {
        res.json(workoutsDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
