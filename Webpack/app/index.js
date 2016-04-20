module.exports = angular
.module('app', ['nvd3','ui.router'])
.config(['$stateProvider','$urlRouterProvider', require('config')])
.constant('MESSAGE', 'Welcome to AngularJs with Webpack Tutorial')
.service('MessageService', ['MESSAGE',require('./core/services/MessageService')])
.controller('MessageCtrl', ['MessageService', require('./core/controllers/message-controller')])
.controller('GraphCtrl', ['MessageService', require('./core/controllers/graph-controller')])
.directive('messageDirective', [require('./core/directives/message-directive')])
.directive('graphDirective', [require('./core/directives/graph-directive')]);