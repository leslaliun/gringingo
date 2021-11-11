var mysql = require('mysql');
var connection;
var SQL = {

    conectar: function() {
        if (connection) {
            return this;
        }
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'gringingo'
        });
        connection.connect(err => {
            if (err) throw err;
            console.log('Connected!');
            // creacion del servidor
        });
        return this;
    },
    ejecutarQuery: function(query, callback) {
        connection.query(query, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
                return;
            }
            if (result.length === 0) {
                callback('el reguistro solicitado no exite');
            } else {
                callback(null, result);
            }
        });
    },
    desconectar: function() {
        connection.end();
        console.log('Desconenctado');
    }
};
module.exports = SQL;