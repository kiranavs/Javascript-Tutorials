/**
 * Created by ksuresh on 23-06-2016.
 */
module.exports = function (app) {
    var userService = require('./userService.js');
    var userSvc = new userService();
    app.post('/createUser', function (req, res) {
        var userDetails = req.body;

        function onData(err, data) {
            if(err){
                res.send(err);
            }
            else {
                res.send(data);
            }
        };

        userSvc.createUser(userDetails, onData);

    });

    app.post('/updateUser', function (req, res) {
        var userDetails = req.body;

        function onData(err, data) {
            if(err){
                res.send(err);
            }
            else {
                res.send(data);
            }
        };

        userSvc.updateUser(userDetails, onData);

    });
    
    app.get('/user', function (req, res) {
        var userId = req.param('userId');

        function onData(err, data) {
            if(err){
                res.send(err);
            }
            else {
                res.send(data);
            }
        };

        userSvc.getUserByUserId(userId, onData);
    })
};
