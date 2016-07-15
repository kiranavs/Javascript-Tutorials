/**
 * Created by ksuresh on 27-06-2016.
 */
module.exports = function () {
    var UserDao = require('./userDAO.js');
    var userDao = new UserDao();
    var uuid = require('uuid');
    var bcrypt = require('bcrypt-nodejs');


    this.createUser = function (userDetails, onData) {
        if(!userDetails.userId){
            userDetails.userId = uuid.v1();
        };
        //Encrypt the password.
        var hash = bcrypt.hashSync(userDetails.password);
        userDetails.password = hash;
        userDao.createUser(userDetails, onData);
    };

    this.updateUser = function (userDetails, onData) {
        userDao.updateUser(userDetails, onData);
    };


    this.getUserByUserId = function (userId, onData) {
        userDao.getUserByUserId(userId, onData);
    };
    
    this.comparePassword = function (password) {
        var hash = bcrypt.hashSync(userDetails.password);
        return bcrypt.compareSync(password, hash); // true
    }
}