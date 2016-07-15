/**
 * Created by ksuresh on 28-06-2016.
 */
module.exports = function () {
    var Sequelize = require('sequelize');
    var usersTable = {
        userId: {
            type: Sequelize.UUID,
            field: 'user_id'
        },
        userName: {
            type: Sequelize.STRING,
            field: 'user_name'
        },
        password: {
            type: Sequelize.STRING,
            field: 'password'
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name'
        },
        middleName: {
            type: Sequelize.STRING,
            field: 'middle_name'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'last_name'
        },
        dob: {
            type: Sequelize.DATE,
            field: 'date_of_birth'
        },
        sex: {
            type: Sequelize.CHAR,
            field: 'sex'
        },
        emailId: {
            type: Sequelize.STRING,
            field: 'email_id'
        }
    };
    return usersTable;
}