module.exports = function(){
	return {
		restrict: 'AE',
		template: require('core/views/message/message.html'),
		scope: {
			message: '='
		},
		link: function(scope, attr, controllers){
			
		}

	}
}