const express = require('express');
const router = express.Router();
const authToken = require('../controllers/auth');
let authPost = require("../middlewares/auth")
const subjectController = require('../controllers/subject.controller');
const upload = require('../middlewares/upload')();

router.get('/', authPost, authToken.isAuthenticated, subjectController.findAll);
router.get('/:id', authPost, authToken.isAuthenticated, subjectController.findOne);
router.post('/', upload.single('photo'), authPost, subjectController.create);
router.put('/:id', upload.single('photo'), authPost, authToken.isAuthenticated, subjectController.update);
router.delete('/:id', authPost, authToken.isAuthenticated, subjectController.delete);

module.exports = (app) => {
  app.use('/api/subjects', router);
};
