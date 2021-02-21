import React from 'react'

import { Button } from 'antd'

// 使用状态管理中的数据
import { inject, observer } from 'mobx-react'

// inject 注入，作用是把某一个或多个子store中的数据注入到组件中去
// observer 观察者，当被观察的被共享的store数据发生变化，本组件自动更新

@inject('store')
@observer
class Good extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {id: 1, name: '手机'},
        {id: 2, name: '电脑'},
        {id: 3, name: '键盘'},
        {id: 4, name: '鼠标'},
      ]
    }
  }
  skipToDetail(ele) {
    console.log(ele)
    this.props.history.push('/good/detail/'+ele.id+'/'+ele.name)
  }
  createGoodList() {
    let { list } = this.state
    return list.map(ele=>(
      <div key={ele.id} onClick={this.skipToDetail.bind(this, ele)}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))
  }
  changeCount(arg) {
    let { CountStore } = this.props.store
    if(arg=='add') {
      CountStore.addCount(100)
    } else {
      CountStore.subCount(50)
    }
  }
  render() {
    // console.log('props', this.props)
    let { CountStore } = this.props.store
    return (
      <div>
        <h1>商品列表页</h1>
        <Button type="primary">Primary Button</Button>
        {this.createGoodList()}
        <hr/>
        <h2>{CountStore.count}</h2>
        <button onClick={this.changeCount.bind(this,'add')}>加</button>
        <button onClick={this.changeCount.bind(this)}>减</button>
      </div>

    )
  }
}

export default Good
