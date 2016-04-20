'use strict';

var webpack = require('webpack');
var path = require('path');
var APP = path.join(__dirname, '/app');

module.exports = {
	context: APP,
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
		  	loader: 'url-loader?mimetype=image/png' 
		  },
		  {
	        test: /\.html$/,
	        loader: "html-loader"
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