const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subject.controller');

router.get('/', subjectController.findAll);
router.get('/:id', subjectController.findOne);
router.post('/', subjectController.create);
router.put('/:id', subjectController.update);
router.delete('/:id', subjectController.delete);

module.exports = router;
