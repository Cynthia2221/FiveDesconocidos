const express = require('express');
const router = express.Router();
const authToken = require('../controllers/auth');
let authPost = require("../middlewares/auth")
const subjectController = require('../controllers/subject.controller');

router.get('/', authPost, authToken.isAuthenticated, subjectController.findAll);
router.get('/:id', authPost, authToken.isAuthenticated, subjectController.findOne);
router.post('/', authPost, subjectController.create);
router.put('/:id', authPost, authToken.isAuthenticated, subjectController.update);
router.delete('/:id', authPost, authToken.isAuthenticated, subjectController.delete);

module.exports = (app) => {
    app.use('/api/subjects', router);
};
