require('../db');
const mongoose = require('mongoose');

let DroneModel = require('../models/Drone.model');

DroneModel.insertMany([
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
])
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Error ', err);
    mongoose.connection.close();
  });
