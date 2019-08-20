var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


// These are for form viewing
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);


// These are the actions for the form
router.post('/', flightsCtrl.create);


module.exports = router;