## react环境配置

### 遇到的问题
1. 解析.jsx的配置
2. fetch的兼容，`whatwg-fetch`
3. autoprefixer
4. jest测试

### 目录
* [环境初始化](#环境初始化)
* [webpack的基本用法](#webpack的基本用法)
* [使用webpackDevserver](#使用webpackDevserver)

### 环境初始化
1. 需要安装node环境，使用node自带的npm或者使用cnpm（速度更快）来下载依赖包。
2. 初始化npm，如果不加--y，你就需要填写项目的有关信息，直接连续按enter就行。
```
mkdir react-env
cd react-env
npm init --y 
```
3. 既然是react的项目,那么就需要安装react相关的依赖，还需要使用webpack来构建项目。这里我使用的是cnpm，安装cnpm(npm install -g cnpm)。还需要说明一下，webpack最好安装在本项目中（即加上--save）,如果进行全局安装，可能在后面打包时出现找不到依赖包的错误。
```
cnpm i --save react react-dom
cnpm i --save webpack
```

### webpack的基本用法
1. 安装`babel-core`,`babel-preset-env`,`babel-preset-react`
- [babel-core](http://babeljs.io/docs/core-packages/#other-packages) : 用于提供babel的基础接口
- [babel-preset-env](http://babeljs.io/docs/plugins/preset-env/#top) : 用于将ES6及以上的语法转义为需要的ES版本
- [babel-preset-react](http://babeljs.io/docs/plugins/preset-react/#install) : 用于转义react的jsx语法
2. 基本的webpack配置文件
```
const path = require('path');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    /* 配置loader */
    module: {
      rules: [
        {
          test: /\.jsx?$/, //匹配的文件
          exclude: /node_modules/, //
          include: path.join(__dirname, 'src'),
          use: [
            {
              loader: 'babel-loader?cacheDirectory=true',
              // options: {
              //   presets: ['@babel/preset-env'],
              //   plugins: []
              // }
            }
          ]
        }
      ]
    }
};
```
3. 在src中添加入口文件index.js和相关的组件页面
4. 执行`./node_modules/.bin/webpack --config webpack.config.dev.js`，在dist文件夹中加上index.html作为模板容器就能查看了。
5. 上一步执行的`./node_modules/.bin/webpack`是因为webpack是在在项目中安装的，如果全局安装就可以不加`./node_modules/.bin/`。为了简化命令可以在`package.json`的`scripts`中加上`"build-dev": "webpack --config webpack.config.dev.js"`。接下来进行构建时可以直接用`npm run build-dev`。

### 使用webpackDevserver
1. 安装`webpack-dev-server`，webpackDevServer的基本配置，配置完成后运行`./node_modules/.bin/webpack-dev-server --config webpack.config.dev.js --color --progress`，同样也可以在`package.json`中简化命令
```
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
  }
```
2. webpack自带的模块热替换
- 用两种用法
  - 使用命令行`webpack-dev-server --config webpack.config.dev.js --color --progress --hot`，后面加了一个`--hot`
  - 使用配置文件webpack.config.dev.js
  ```
  const webpack = require('webpack')

  plugins: [
    new webpack.webpack.HotModuleReplacementPlugin()
  ]
  ```
  - 两种用法最后都要在`index.js`中加上
  ```
  if(module.hot) {
    module.hot.accept()
  }
  ```

3. 使用`react-hot-loader`
  - webpack自带的模块热替换能够仅仅刷新改变的模块而不用刷新整个页面，但是不能保存react的state。`react-hot-loader`不仅能够实现热替换功能，同时也能够保存react的state
  - `react-hot-loader`的使用，使用前需要先开启webpack自带的模块热替换
  ```
  //webapck.config.dev.js
    entry: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]

  //index.js
    import React from 'react'
    import { render } from 'react-dom'
    import { AppContainer } from 'react-hot-loader'

    import getRouter from './router/router.jsx'

    //webpack自带的模块热替换
    // if(module.hot) {
    //   module.hot.accept()
    // }

    //react-hot-loader
    const renderWithHotReload = ( RootElement ) => {
      render(
        <AppContainer>
          {RootElement}
        </AppContainer>
        ,
        document.querySelector('#app')
      )
    }

    //初始化
    renderWithHotReload(getRouter())
    /* 模块热替换 */
    if(module.hot) {
      module.hot.accept('./router/router.jsx', () => {
        const getRouter = require('./router/router.jsx').default
        renderWithHotReload(getRouter())
      })
    }
  ```

