var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// router.get('/tickets/new', ticketsCtrl.new);

router.post('/flights/:id/tickets/', ticketsCtrl.create);
// router.post('/tickets', ticketsCtrl.create);

module.exports = router;