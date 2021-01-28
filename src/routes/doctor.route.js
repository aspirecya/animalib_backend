const express = require('express');
const router = express.Router();
const doctor = require('../controllers/doctor.controller');
const verifyAuth = require('../utils/verifyAuth');
const verifyPerm = require('../utils/verifyPerm');

router.post('/doctors/', doctor.create);
router.get('/doctors/', verifyAuth, doctor.findAll);
router.get('/doctor/:id', verifyAuth, doctor.findById);
router.patch('/doctor/:id', verifyAuth, doctor.findByIdAndUpdate);
router.delete('/doctor/:id', verifyAuth, doctor.findByIdAndRemove);
router.delete('/doctors/delete', verifyPerm, doctor.removeAllDoctors);

module.exports = router;