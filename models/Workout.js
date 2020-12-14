const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: String,
      name: {
        type: String,
        required: 'Enter a name'
      },
      duration: {
        type: Number,
        required: 'Enter a number'
      },
      weight: {
        type: Number,
        required: 'Enter a number'
      },
      reps: {
        type: Number,
        required: 'Enter a number'
      },
      sets: {
        type: Number,
        required: 'Enter a number'
      },
      distance: {
        type: Number,
        required: 'Enter a number'
      }
    }
  ]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
