const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model');

/* GET home page */
router.get('/', (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      res.render('index', { drones });
    })
    .catch(() => {
      next('drone find failed');
    });
});

module.exports = router;
