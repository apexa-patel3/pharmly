const express = require('express');

const addUser = require('../controllers/user/user.controller');

const router = express.Router();

router.post('/users', addUser);

module.exports = router;
