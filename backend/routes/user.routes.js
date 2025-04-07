const express = require('express');
const router = express.Router();
const authToken = require('../controllers/auth');
let authPost = require("../middlewares/auth")
const users = require('../controllers/user.controller');

router.get('/', authPost, authToken.isAuthenticated, users.findAll);
router.get('/:id', authPost, authToken.isAuthenticated, users.findOne);
router.post('/', authPost, users.create);
router.put('/:id', authPost, authToken.isAuthenticated, users.update);
router.delete('/:id', authPost, authToken.isAuthenticated, users.delete);

module.exports = (app) => {
    app.use('/api/users', router);
};



