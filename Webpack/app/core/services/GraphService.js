module.exports = function($http, $q){
	var graphService = {};

	graphService.getBarGraphData = function(){
		var deferred = $q.defer();
		$http.get('./data/bar-graph-data.json').then(function(data){
			deferred.resolve(data.data);
		},function(err){
			deferred.reject(err);
			console.log(err);
		})
		return deferred.promise;
	};
	return graphService;
}