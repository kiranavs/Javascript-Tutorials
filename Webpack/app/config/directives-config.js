module.exports = function(){
	angular
	.module('app')
	.directive('messageDirective', [require('../core/directives/message-directive')])
	.directive('graphDirective', [require('../core/directives/graph-directive')])
	.directive('datamapDirective', [require('../core/directives/datamap-directive')]);
}