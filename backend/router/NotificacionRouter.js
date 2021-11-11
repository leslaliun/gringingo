var express = require('express');
var controller = require('../controllers/NotificacionController');

var router = express.Router();
router.post('/notificaciones', controller.hayNotificion);
router.post('/notificaciones_getAll', controller.getNotificion);

module.exports = router;