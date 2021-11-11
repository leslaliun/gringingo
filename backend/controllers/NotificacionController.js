var conector = require('../mySql/mySql');

var liga = {
    hayNotificion: async function(req, res) {
        let body = req.body;
        let {id} = body;
        const query = `call sp_notificaciones(${id})`;
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
                    items: datos[0]
                });
            }
        });
    },
    getNotificion: async function(req, res) {
        let body = req.body;
        let {id, tabla} = body;
        const query = `call sp_get_notificaciones(${id},'${tabla}')`;
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
                    mensaje: "se realizo con exito la consult",
                    items: datos[0]
                });
            }
        });
    },
};
module.exports = liga;