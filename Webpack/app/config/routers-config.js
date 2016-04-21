module.exports = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home',{
		url: '/home',
		template: require('core/views/home.html')
	})
	.state('home.message',{
		url: '/message',
		template: require('core/views/message/message-example.html'),
		controller: 'MessageCtrl',
		controllerAs: 'messageCtrl'
	})
	.state('home.graph',{
		url: '/graph',
		template: require('core/views/graph/graph-example.html'),
		controller: 'GraphCtrl',
		controllerAs: 'graphCtrl'
	})
}