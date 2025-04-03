const express = require('express');
const router = express.Router();
const levelController = require('../controllers/level.controller');

router.get('/', levelController.findAll);
router.get('/:id', levelController.findOne);
router.post('/', levelController.create);
router.put('/:id', levelController.update);
router.delete('/:id', levelController.delete);

module.exports = router;