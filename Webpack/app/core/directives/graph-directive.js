module.exports = function(){
	return {
		restrict: 'AE',
		scope: {
			data: '=',
			options: '='
		},
		templateUrl: 'core/views/graph/graph.html',
		link: function(scope, attrs, ctrl){

		}
	}
}