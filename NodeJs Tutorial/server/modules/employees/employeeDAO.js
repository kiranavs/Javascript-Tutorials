/**
 * Created by ksuresh on 23-06-2016.
 */
module.exports = function () {
    var databaseConnection = require('../../database.js');
    var database = new databaseConnection();

    this.getEmployees = function (callback) {
        database.connect(function (connection) {
            var employees = connection.query('SELECT * FROM employees', function (err, rows) {
                if (err) {
                    console.error(err);
                    callback(err, null);
                }
                else {
                    console.log('Data received from Db:\n');
                    callback(null, rows);
                }
            });
        }, function (err) {
            console.error(err);
        });

    };


}
