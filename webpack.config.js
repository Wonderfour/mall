var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry:{
		main:path.resolve(__dirname,'app/index.jsx'),//入口文件
		vendor:['moment']   //注意这个地方的写法 ，很容易报错
	},
	output:{
		filename:'/js/[name].js',
		path:path.resolve(__dirname,'dist')		
	},
	//扩展 在引入一个js或css的时候不用再写后缀名
	resolve:{
		extensions:['','.js','.jsx']
	},
	module:{
		loaders:[
			{ test:/\.(js|jsx)$/,loader:'babel'},
			{ test: /\.(css|less)$/, exclude: /node_modules/,loader: ExtractTextPlugin.extract('style-loader','css-loader','less-loader') },
			{ test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img/[name].[ext]?[hash]' },  // 限制大小5kb  //name 代表要生成的图片文件名和路径
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=[name].[ext]?[hash]'} // 限制大小小于5k
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
		//打包公共文件是需要指定一下  要不然会全部打包
		new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // 指定公共 bundle 的名字。
        }),
		// 分离css
		new ExtractTextPlugin("css/styles.css"),
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