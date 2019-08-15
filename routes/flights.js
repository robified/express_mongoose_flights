var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/flights');

router.get('/new', moviesCtrl.new);

module.exports = router;