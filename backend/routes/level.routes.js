const express = require('express');
const router = express.Router();
const authToken = require('../controllers/auth');
let authPost = require("../middlewares/auth")
const levelController = require('../controllers/level.controller');

router.get('/', authPost, authToken.isAuthenticated, levelController.findAll);
router.get('/:id', authPost, authToken.isAuthenticated, levelController.findOne);
router.post('/', authPost, levelController.create);
router.put('/:id', authPost, authToken.isAuthenticated, levelController.update);
router.delete('/:id', authPost, authToken.isAuthenticated, levelController.delete);

module.exports = (app) => {
    app.use('/api/levels', router);
};