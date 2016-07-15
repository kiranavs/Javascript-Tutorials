/**
 * Created by ksuresh on 23-06-2016.
 */
module.exports = function () {
    var mysql = require('mysql');
    this.connect = function (onSuccess, onError) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'nodejs'
        });
        connection.connect(function(err){
            if(err){
                console.log('Error connecting db');
                onError(err);
            }
            else{
                onSuccess(connection);
                console.log('Connection established');
            }
        });
    };

    this.disconnect = function (connection) {
        connection.end(function(err){

        });
    }
}