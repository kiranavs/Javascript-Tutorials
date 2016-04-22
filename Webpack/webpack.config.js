'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//Do use path and join the base directory in the project for the live reload
var path = require('path');
var APP = path.join(__dirname, '/app');
var minimize = process.argv.indexOf('--minimize') !== -1;
var plugins = [];
var output = { path: APP };

if (minimize) 
{
	output.filename = 'bundle.min.js'
	plugins.push(new webpack.optimize.UglifyJsPlugin());
}
else
{
	output.filename = 'bundle.js'
}
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new HtmlWebpackPlugin({
	inject: 'body',
	template: 'index.html'
}));

module.exports = {
	context: APP,
	//webapp server setup, install the webapp-dev-server plugin HotModuleReplacementPlugin() and add it in the plugins
	entry: {
		app: ['webpack/hot/dev-server', './core/bootstrap.js']
	},
	plugins: plugins,

	//output folder path for the bundle.js which will be included in the index.html
	output: output,

	//configuration to enable source map
	debug: true,
	devtool: 'source-map',
	devServer: {
        contentBase: APP+"/", //path for the code base to show in source map
    },

    //loaders are required to load the files based on file type
    //We need to load the html,css/scss and js files using require('filepath') for the live reload
    //install the plugin for loaders then add the loaders in config file.
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

  	//To load the external plugin,we need to add the application base directory name and alias with the path.
  	//we can call alias name using require('aliasName'), called in vendor.js
  	resolve: {
	  root: path.resolve(APP),
	  alias: {
	    d3: 'core/components/d3/d3.js'
	  },
	  extensions: ['', '.js', '.jsx']
	}
}