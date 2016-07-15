/**
 * Created by ksuresh on 23-06-2016.
 */
module.exports = function (app) {
    app.get('/listemployees', function (req, res) {
        var employeeService = require('./employeeService.js');
        var empSvc = new employeeService();

        function onReciveData(err, data) {
            if(err){
                res.send(err);
            }
            else {
                res.send(data);
            }
        };

        empSvc.getEmployees(onReciveData);

    });
};
