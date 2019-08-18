var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// These are for form viewing
router.get('/', flightsCtrl.indexView);
router.get('/new', flightsCtrl.newView);
router.get('/:id', flightsCtrl.showView);

// These are the actions for the form
router.post('/', flightsCtrl.create);

module.exports = router;