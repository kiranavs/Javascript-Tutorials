module.exports = function(){
	return {
		restrict: 'AE',
		scope: {
			data: '=',
			options: '='
		},
		template: require('core/views/graph/graph.html'),
		link: function(scope, attrs, ctrl){

		}
	}
}