/**
 * Created by ksuresh on 23-06-2016.
 */
module.exports = function () {
    var employeeDao = require('./employeeDAO.js');
    var empDao = new employeeDao();
    this.getEmployees = function (onReciveData) {
        empDao.getEmployees(onReciveData);
    }
}