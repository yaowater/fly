import React from 'react'
// 引入antd样式文件
import 'antd/dist/antd.css'

import { Checkbox, Radio } from '@/components'
import ThemeCtx from '@/utils/theme'

import { Layout } from '@/components'
import { HashRouter, BrowserRouter } from 'react-router-dom'

// 状态管理
import { Provider } from 'mobx-react'
import store from '@/store'

// 定义一个React根组件
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favArr: [
        {id:1, name:'读书'},
        {id:2, name:'跑步'},
        {id:3, name:'游戏'},
        {id:4, name:'编程'},
        {id:5, name:'唱歌'},
      ],
      favs: [1,2,5],
      eduArr: [
        {id:1, name:'博士'},
        {id:2, name:'硕士'},
        {id:3, name:'本科'},
        {id:4, name:'大专'},
        {id:5, name:'高中'},
      ],
      edu: 3,
      theme: {
        // 换皮肤
        light: {
          color: '#000000',
          background: '#eeeeee'
        },
        dark: {
          color: '#ffffff',
          background: '#222222'
        },
        pink: {
          color: '#ffffff',
          background: '#ff0000'
        }
      }
    }
  }
  favChange(val) {
    this.setState({favs: val})
  }
  eduChange(val) {
    this.setState({edu: val})
  }
  render() {
    return (
        <HashRouter>
          <Provider store={store}>
            <ThemeCtx.Provider value={this.state.theme.dark}>
              <Layout />
            </ThemeCtx.Provider>
          </Provider>
        </HashRouter>

    )
  }
}
