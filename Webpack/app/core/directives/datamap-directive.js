module.exports = function(){
	return {
		restrict: 'AE',
		template: require('core/views/datamap/datamap.html'),
		scope: {
			mapObject: '='
		},
		link: function(scope, attrs, ctrl){
			console.log("Inside datamap"+scope.mapObject);
		}

	}
}