module.exports = function(){
	angular
	.module('app')
	.service('MessageService', ['MESSAGE',require('../core/services/MessageService')])
	.service('GraphService', ['$http','$q',require('../core/services/GraphService')])
}