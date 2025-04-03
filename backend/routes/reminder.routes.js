const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminder.controller');

router.get('/', reminderController.findAll);
router.get('/:id', reminderController.findOne);
router.post('/', reminderController.create);
router.put('/:id', reminderController.update);
router.delete('/:id', reminderController.delete);

module.exports = router;