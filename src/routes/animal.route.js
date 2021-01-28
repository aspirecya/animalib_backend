const express = require('express');
const router = express.Router();
const animal = require('../controllers/animal.controller');
const verifyAuth = require('../utils/verifyAuth');
const verifyPerm = require('../utils/verifyPerm');

router.post('/animals/', animal.create);
router.get('/animals/', verifyAuth, animal.findAll);
router.get('/animal/:id', verifyAuth, animal.findById);
router.get('/animal/owner/:id_owner', verifyAuth, animal.findByOwnerId);
router.patch('/animal/:id', verifyAuth, animal.findByIdAndUpdate);
router.delete('/animal/:id', verifyAuth, animal.findByIdAndRemove);
router.delete('/animals/delete', verifyPerm, animal.removeAllAnimals);

module.exports = router;