var express = require('express');
var usuarioController = require('../controllers/UsuarioController');

var usuarioRouter = express.Router();
usuarioRouter.post('/usuario', usuarioController.insert);
usuarioRouter.post('/login', usuarioController.getLogin);
usuarioRouter.post('/usuario_update_experiencia', usuarioController.updateExperiencia);
usuarioRouter.post('/usuario_resta_vida', usuarioController.restarVida);

module.exports = usuarioRouter;