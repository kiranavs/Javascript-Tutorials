/**
 * Created by ksuresh on 23-06-2016.
 */
module.exports = function (app) {
    require('./modules/employees/employeeController.js')(app);
    require('./modules/users/userController.js')(app);
};
