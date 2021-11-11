var conector = require('../mySql/mySql');

var controller = {
    selectByNivelId: function(req, res) {
        // let body = req.body;
        // let id = body.id;
        let id = req.params.id;
        const query = `select * from lecciones where nivel_id = ${id}`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    items: datos
                });
            }
        });
    },
    leccionCompleta: function(req, res) {
        let body = req.body;
        let { user_id, leccion_id } = body;


        if (user_id == "" || leccion_id == "") {
            res.json({
                status: 400,
                mensaje: "los datos no pueden ser vacios",
                usuario: null
            });
            return;
        }
        
        var query = `call sp_leccion_usuario_insert(${leccion_id},${user_id});`;
        const conecion = conector.conectar();
        conecion.ejecutarQuery(query, (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    usuario: null
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    items: datos[0]
                });
            }
        });
    }
};
module.exports = controller;