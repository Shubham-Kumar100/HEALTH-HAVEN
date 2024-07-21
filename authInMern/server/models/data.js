// models/data.js

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Update this schema based on the actual structure of your data
  caloriesValue: {
    type: Number,
    required: true,
  },
  sleepValue: {
    type: Number,
    required: true,
  },
  stepsValue: {
    type: Number,
    required: true,
  },
  waterValue: {
    type: Number,
    required: true,
  },
  weightValue: {
    type: Number,
    required: true,
  },
  workoutValue: {
    type: Number,
    required: true,
  },
  formattedDate: {
    type: String,
    required: true,
  },
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
