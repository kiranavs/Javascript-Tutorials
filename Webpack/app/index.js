module.exports = angular
.module('app', ['nvd3','ui.router'])
.config(['$stateProvider','$urlRouterProvider', require('config/routers-config')]);

require("./config/url-config")();
require("./config/services-config")();
require("./config/controllers-config")();
require("./config/directives-config")();
require("./config/constants-config")();