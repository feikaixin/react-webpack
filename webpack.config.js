const path = require('path');
const webpack = require('webpack');
const PUBLICPATH = '/dist/';
module.exports = {
  entry:'./a.js',
  mode:'development',
  output:{
    filename:'[name].js',
    chunkFilename:'[name].js',// 设置按需加载后的chunk名字
    publicPath:'/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },
  devServer: {
    contentBase: './',
    compress: true,
    port: 9000,
    hot: true,
    //historyApiFallback: true   // 如果你的应用使用HTML5 history API，你可能需要使用index.html响应404或者问题请求，
    proxy: {
      "/": {
        bypass: function(req, res, proxyOptions) {
          console.log('Skipping proxy for browser request.')
          return `/index.html`
        }
      }
    }
  },
  plugins: [ // 开始热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
}