const path = require('path')
const webpack= require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') //index.html模板

module.exports = {
  devtool: 'cheap-module-source-map', //更注重性能的调试工具
  /*入口*/
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],
    vender: ['react','react-dom','react-router-dom','redux','react-redux']
  },
  
  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
      path: path.join(__dirname, './build'),
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js'
  },

  /* 配置loader */
  module: {
    rules: [
      /* /\.jsx?$/ */
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true',//缓存配置，提高编译速度
            // options: {
            //   presets: ['@babel/preset-env'],
            //   plugins: []
            // }
          }
        ]
      },
      /* /\.css$/ */
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              module: true
            }
          }
        ]
      },
      /* /\.(png|jpg|gif)$/ */
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //模块热加载插件
    new webpack.HotModuleReplacementPlugin(), 
    //index.html模板
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
    //公共库的提取
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender'
    })
  ],
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router')
    }
  }
}