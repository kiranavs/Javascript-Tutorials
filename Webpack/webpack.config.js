'use strict';
var APP = __dirname + '/app';
var webpack = require('webpack');
var path = require('path');
module.exports = {
	context: path.join(__dirname, 'app'),
	entry: {
		app: ['webpack/hot/dev-server', './core/bootstrap.js']
	},
	plugins: [  
	    new webpack.HotModuleReplacementPlugin(),
	],
	output: {
		path: APP,
		filename: 'bundle.js'
	},
	debug: true,
	devtool: 'source-map',
	devServer: {
        contentBase: APP+"/",
    },
	module: {
	    loaders: [
	      {
	        test: /\.scss$/,
	        loader: 'style!css!sass'
	      },
	      {
		    test: /\.js?$/,
		    exclude: /(node_modules)/,
		    loader: 'babel',
		    query: {
		      presets: ['es2015'],
		      plugins: ['transform-runtime']
		    }
		  },
		  { 
		  	test: /\.(jpe?g|png|gif|svg)$/i, 
		  	loader: 'url?limit=10000!img?progressive=true' 
		  }
		]
  	},
  	resolve: {
	  root: path.resolve(APP),
	  alias: {
	    d3: 'core/components/d3/d3.js'
	  },
	  extensions: ['', '.js', '.jsx']
	}
}