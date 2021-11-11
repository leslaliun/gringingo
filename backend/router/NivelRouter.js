var express = require('express');
var controller = require('../controllers/NivelController');

var router = express.Router();
router.get('/nivelByUser/:id', controller.selectByUser);

module.exports = router;