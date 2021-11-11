var conector = require('../mySql/mySql');
var objUsuario = require('../models/Usuario');

var usuario = {
    getLogin: function(req, res) {
        var body = req.body;
        var nick = body.nick;
        var contraseña = body.password;
        var query = "call sp_usuario_selectByLogin('" + nick + "','" + contraseña + "')";
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: "se realizo con exito la consulta",
                    usuario: null
                });
            } else {
                objUsuario = datos[0][0];
                if (!objUsuario) {
                    objUsuario = null;
                }
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    usuario: objUsuario
                });
            }
        });
    },
    insert: function(req, res) {
        let body = req.body;
        let nick = body.nick.trim();
        let password = body.password;
        if (password == "" || nick == "") {
            res.json({
                status: 400,
                mensaje: "los datos no pueden ser vacios",
                usuario: null
            });
            return;
        }
        var query = `call sp_usuario_insert('${nick}', '${password}')`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    usuario: null
                });
            } else {
                objUsuario = datos[0][0];
                objUsuario.password = null;
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    usuario: objUsuario
                });
            }
        });
    },
    updateExperiencia: function(req, res) {
        let body = req.body;
        let { id } = body;
        if (id == "") {
            res.json({
                status: 400,
                mensaje: "los datos no pueden ser vacios",
                usuario: null
            });
            return;
        }
        var query = `call sp_usuarioExperiencia_update(${id})`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    usuario: null
                });
            } else {
                objUsuario = datos[0][0];
                objUsuario.password = null;
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    usuario: objUsuario
                });
            }
        });
    },
    restarVida: function(req, res) {
        let body = req.body;
        let { id } = body;
        if (id == "") {
            res.json({
                status: 400,
                mensaje: "los datos no pueden ser vacios",
                usuario: null
            });
            return;
        }
        var query = `call sp_usuarioQuitarVida(${id})`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    usuario: null
                });
            } else {
                objUsuario = datos[0][0];
                objUsuario.password = null;
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    usuario: objUsuario
                });
            }
        });
    }
};
module.exports = usuario;