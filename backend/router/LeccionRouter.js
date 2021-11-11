var express = require('express');
var controller = require('../controllers/LeccionesController');

var router = express.Router();
router.get('/lecciones_by_nivel/:id', controller.selectByNivelId);
router.post('/lecciones_completed', controller.leccionCompleta);

module.exports = router;