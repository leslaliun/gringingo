var conector = require('../mySql/mySql');

var respuesta = {
    selectByPreguntaId: function(req, res) {
        let body = req.body;
        let id = body.id;
        const query = `select * from respuestas where pregunta_id = ${id}`;
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
};
module.exports = respuesta;