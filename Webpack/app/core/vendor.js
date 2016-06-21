module.exports = function(){
	require('../index.scss');
	require('css!./components/nvd3/build/nv.d3.css');
	require('angular');
	require('angular-ui-router');
	require('d3');
	/*require('./components/topojson/topojson');
	require('datamaps.all');*/
	require('./components/angular-datamaps/dist/angular-datamaps');
	require('./components/nvd3/build/nv.d3');
	require('angular-nvd3');
};