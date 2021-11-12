const mongoose = require('mongoose');

const DroneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const DroneModel = mongoose.model('Drone', DroneSchema);

module.exports = DroneModel;
