module.exports = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home',{
		url: '/home',
		templateUrl: 'core/views/home.html'
	})
	.state('home.message',{
		url: '/message',
		templateUrl: 'core/views/message/message-example.html',
		controller: 'MessageCtrl',
		controllerAs: 'messageCtrl'
	})
	.state('home.graph',{
		url: '/graph',
		templateUrl: 'core/views/graph/graph-example.html',
		controller: 'GraphCtrl',
		controllerAs: 'graphCtrl'
	})
}