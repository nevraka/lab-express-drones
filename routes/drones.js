const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model');
// require the Drone model here

router.get('/drones/', (req, res, next) => {
  //   Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
      res.render('drones/list.hbs', { drones });
    })
    .catch(() => {
      next('drone find failed');
    });
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones');
    })
    .catch(() => {
      next('Failed');
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;

  DroneModel.findById(id)
    .then((drone) => {
      res.render('drones/update-form.hbs', { drone });
    })
    .catch(() => {
      next('Failed');
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  const { id } = req.params;

  DroneModel.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones');
    })
    .catch(() => {
      next('Editing failed');
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  DroneModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones');
    })
    .catch(() => {
      next('Deleting failed');
    });
});

module.exports = router;
