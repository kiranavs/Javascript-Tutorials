module.exports = function(){
	require('../index.scss');
	require('css!./components/nvd3/build/nv.d3.css');
	require('angular');
	require('./components/angular-ui-router/release/angular-ui-router');
	require('d3');
	require('./components/nvd3/build/nv.d3');
	require('./components/angular-nvd3/dist/angular-nvd3');
};