module.exports = function(){
	angular
	.module('app')
	.controller('MessageCtrl', ['MessageService', require('../core/controllers/message-controller')])
	.controller('GraphCtrl', ['GraphService', require('../core/controllers/graph-controller')])
}