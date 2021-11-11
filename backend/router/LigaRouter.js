var express = require('express');
var controller = require('../controllers/LigaController');

var router = express.Router();
router.get('/liga', controller.selectAll);

module.exports = router;