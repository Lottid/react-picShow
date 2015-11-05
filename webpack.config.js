var path = require("path");
var glob = require('glob');
var webpack = require('webpack');

function getEntry() {
	var entry = {};
	glob.sync(__dirname + '/jsx/*.js').forEach(function(name) {
		var newPath = name.split("jsx/");
		var lastPath = newPath[1].split(".js")[0];
		entry[lastPath] = './jsx/' + lastPath + '.js';
	});
	return entry;
}

module.exports = {
	// 程序的入口文件  
	refreshEntry: function() {
		this.entry = getEntry();
	},
	entry: getEntry(),
	output: {
		// 所有打包好的资源的存放位置  
		path: path.resolve(__dirname, "./build/js/app/"),
		// 使用url-loader 的资源的前缀  
		publicPath: './build/',
		// 生成的打包文件名  
		filename: '[name].js'
	},
	module: {
		loaders: [{
			// 用于匹配加载器支持的文件格式的正则表达式  
			test: /\.(js)$/,
			// 要使用的加载器类型  
			// 加载器支持通过查询字符串的方式接收参数  
			loader: 'react-hot!jsx-loader?harmony'
		}, {
			test: /\.(css)$/,
			// 多个加载器通过“!”连接  
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg)$/,
			// url-loader 支持base64 编码的行内资源  
			loader: 'url-loader?size=8192'
		}]
	}
};