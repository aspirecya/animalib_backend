const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const verifyAuth = require('../utils/verifyAuth');
const verifyPerm = require('../utils/verifyPerm');

router.post('/users/', user.create);
router.get('/users/', verifyAuth, user.findAll);
router.get('/user/:id', verifyAuth, user.findById);
router.patch('/user/:id', verifyAuth, user.findByIdAndUpdate);
router.delete('/user/:id', verifyAuth, user.findByIdAndRemove);
router.delete('/users/delete', verifyPerm, user.removeAllUsers);

// router.post('/user/:id/animal/add', verifyAuth, user.addAnimalToUser);
// router.delete('/user/:id/animal/delete/:animalid', verifyAuth, user.deleteAnimalFromUser);

module.exports = router;