import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import getRouter from './router/router.jsx'

// const win  = window
// const params = win.location.search
// const redirect_uri = decodeURI("http://mall.aodous.org/front")
// alert(redirect_uri)
// if(!params) {
//   win.location = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx562ce191772793a0&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
// }

// fetch("/queryProducts")
// .then(res => res.json())
// .then(json => {
//   console.log(json)
// })

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




