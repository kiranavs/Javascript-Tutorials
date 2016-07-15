(function(){
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser')
    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));
    require('./rest-service.js')(app);  //all services listed in this file.

    var server = app.listen(8080, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
    });
})();


