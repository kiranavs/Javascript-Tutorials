module.exports = function(){
	angular
	.module('app')
	.directive('messageDirective', [require('../core/directives/message-directive')])
	.directive('graphDirective', [require('../core/directives/graph-directive')]);
}