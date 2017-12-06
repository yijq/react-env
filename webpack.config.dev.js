const path = require('path')
const webpack= require('webpack')

module.exports = {
  /* 开发使用的服务器 */
  devServer: {
    contentBase: path.join(__dirname,'./dist'),
    // after(app) {},
    // allowedHosts: [],
    // before(app) {},
    // clientLogLevel: "none",
    // compress: true,
    historyApiFallback: true,
    hot: true,
    // https: true,
    // index: index.html,
    // port: 7070,
    proxy: {
      context: ["/queryProducts"],
      target: "http://192.168.11.176:8080"
    }
  },

  /*入口*/
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],
  
  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js'
  },

  /* 配置loader */
  module: {
    rules: [
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //模块热加载插件
  ],
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components')
      
    }
  }
};