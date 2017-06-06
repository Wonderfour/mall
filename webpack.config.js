var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')


module.exports = {
	entry:path.resolve(__dirname,'app/index.jsx'), //入口文件
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'/js/[name].js'
	},
	//扩展 在引入一个js或css的时候不用再写后缀名
	resolve:{
		extensions:['','.js','.jsx']
	},
	module:{
		loaders:[
			{test:/\.(js|jsx)$/,loader:'babel?presets[]=react,presets[]=es2015'}
		]
	},
	//插件
	plugins:[
		//html 模板插件
		new HtmlWebpackPlugin({
			//path.resolve(__dirname,'dist')
			//__dirname+'/app/index.tmpl.html
			template:path.resolve(__dirname,'app/index.tmpl.html')
		}),
		//热加载插件
		new webpack.HotModuleReplacementPlugin(),

		//打开浏览器
		new OpenBrowserPlugin({
			url:"http://localhost:8080"
		}),
		
	],
	//webpack 服务器 
	devServer:{
		colors:true, //终端中输出结果为彩色
		historyApiFallback:true, //不跳转，在开发单页应用的时候非常有用，它依赖于HTML5 history API ,如果设置为true,所有的跳转将指向index.html
		inline:true,//实时刷新
		hot:true //使用热加载插件 HotModuleReplacementPlugin
	}
}