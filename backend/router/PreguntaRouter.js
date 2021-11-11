var express = require('express');
var controller = require('../controllers/PreguntaController');

var router = express.Router();
router.post('/pregunta_by_leccion', controller.selectByLeccionId);

module.exports = router;