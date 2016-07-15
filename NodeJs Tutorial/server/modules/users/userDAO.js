/**
 * Created by ksuresh on 27-06-2016.
 */
module.exports = function () {
    var database = require('../../config/connectdb.js');
    var connectdb = new database();
    var usersConfig = require('./users.js')();


    this.createUser = function (userDetails, onDataReceive) {
        connectdb.connect(function (sequelize, recreateTables) {
            var Users = sequelize.define('users',
                usersConfig, {
                    freezeTableName: true
                }
            );
            Users.sync({force: recreateTables}).then(function () {
                // Table created
                onDataReceive(null, Users.create(userDetails));
            });
        }, function (err) {
            console.error(err);
            onDataReceive(err, null);
        });
    };

    this.updateUser = function (userDetails, onDataReceive) {
        connectdb.connect(function (sequelize) {
            var Users = sequelize.define('users',
                usersConfig, {
                    freezeTableName: true
                }
            );
            Users.save(userDetails).then(function (success) {
                onDataReceive(null, success);
            }, function (err) {
                onDataReceive(err, null);
            });
        }, function (err) {
            console.error(err);
            onDataReceive(err, null);
        });
    };

    this.getUserByUserId = function (userId, onDataReceive) {
        connectdb.connect(function (sequelize) {
            var Users = sequelize.define('users',
                usersConfig, {
                    freezeTableName: true
                }
            );
            Users.findOne({
                where: {
                    userId: userId
                }
            }).then(function (data) {
                    onDataReceive(null, data);
                },
                function (err) {
                    onDataReceive(err, null);
                });
        }, function (err) {
            console.error(err);
            onDataReceive(err, null);
        });
    }

}
