const express = require('express');

// import index controller 
const indexController = require('../controllers/index');

const router = express.Router();

// get posts
router.get('/', indexController.getIndex);

module.exports = router;