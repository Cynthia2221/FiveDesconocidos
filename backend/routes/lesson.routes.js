const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.controller');

router.get('/', lessonController.findAll);
router.get('/:id', lessonController.findOne);
router.post('/', lessonController.create);
router.put('/:id', lessonController.update);
router.delete('/:id', lessonController.delete);

module.exports = router;