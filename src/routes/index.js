const express = require('express');
const router = express.Router();

const authRouter = require('./auth.route');
const userRouter = require('./user.route');
const interventionRouter = require('./intervention.route');
const doctorRouter = require('./doctor.route');
const animalRouter = require('./animal.route');

router.use(authRouter);
router.use(userRouter);
router.use(interventionRouter);
router.use(doctorRouter);
router.use(animalRouter);

module.exports = router;
