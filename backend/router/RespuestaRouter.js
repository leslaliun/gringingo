var express = require('express');
var controller = require('../controllers/RespuestaController');

var router = express.Router();
router.post('/respuesta_by_pregunta', controller.selectByPreguntaId);

module.exports = router;