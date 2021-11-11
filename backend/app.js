var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivosRutas
var usuarioRouter = require('./router/UsuarioRouter');
var ligaRouter = require('./router/LigaRouter');
var nivelRouter = require('./router/NivelRouter');
var preguntaRouter = require('./router/PreguntaRouter');
var respuestaRouter = require('./router/RespuestaRouter');
var leccionRouter = require('./router/LeccionRouter');
var notificacionRouter = require('./router/NotificacionRouter');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api',
    usuarioRouter,
    ligaRouter,
    nivelRouter,
    preguntaRouter,
    respuestaRouter,
    leccionRouter,
    notificacionRouter,
);


// exportar
module.exports = app;