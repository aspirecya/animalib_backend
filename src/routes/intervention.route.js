const express = require('express');
const router = express.Router();
const intervention = require('../controllers/intervention.controller');
const verifyAuth = require('../utils/verifyAuth');
const verifyPerm = require('../utils/verifyPerm');

router.post('/interventions/', intervention.create);
router.get('/interventions/', verifyAuth, intervention.findAll);
router.get('/interventions/:id', verifyAuth, intervention.findById);
router.get('/interventions/animal/:id_animal', verifyAuth, intervention.findByAnimalId);
router.get('/interventions/doctor/:id_doctor', verifyAuth, intervention.findByDoctorId);
router.patch('/intervention/:id', verifyAuth, intervention.findByIdAndUpdate);
router.delete('/intervention/:id', verifyAuth, intervention.findByIdAndRemove);
router.delete('/interventions/delete', verifyPerm, intervention.removeAllInterventions);

module.exports = router;