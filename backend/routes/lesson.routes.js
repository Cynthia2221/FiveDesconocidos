const express = require('express');
const router = express.Router();
const authToken = require('../controllers/auth');
let authPost = require("../middlewares/auth")
const lessonController = require('../controllers/lesson.controller');

router.get('/', authPost, authToken.isAuthenticated, lessonController.findAll);
router.get('/', authPost, authToken.isAuthenticated, lessonController.findLessonByLevel);
router.get('/:id', authPost, authToken.isAuthenticated, lessonController.findOne);
router.post('/', authPost, lessonController.create);
router.put('/:id', authPost, authToken.isAuthenticated, lessonController.update);
router.delete('/:id', authPost, authToken.isAuthenticated, lessonController.delete);

module.exports = (app) => {
    app.use('/api/lessons', router);
};