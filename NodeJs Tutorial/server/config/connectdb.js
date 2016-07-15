/**
 * Created by ksuresh on 27-06-2016.
 */
module.exports = function () {
    var Sequelize = require('sequelize');
    var properties = require('./dbproperties.json');
    this.connect = function (onSuccess, onError) {
        var recreateTables = properties.force;
        var sequelize = new Sequelize(properties.database, properties.username, properties.password, {
            host: properties.host,
            dialect: properties.dialect,
            pool: {
                max: properties.poolmax,
                min: properties.poolmin,
                idle: properties.idle
            }
        });
        sequelize
            .authenticate()
            .then(function() {
                console.log('Connection has been established successfully.');
                onSuccess(sequelize, recreateTables);
            })
            .catch(function (err) {
                console.log('Unable to connect to the database:', err);
                onError(err);
            });
    }
}


