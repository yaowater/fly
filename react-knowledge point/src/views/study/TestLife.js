import React from 'react'

export default class TestLife extends React.Component {
  /* 挂载阶段（常用3个） */
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      aaa: 1
    }
    console.log('constructor')
  }
  // 很少用
  // static getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps')
  //   return null
  // }

  // 挂载已完成 mounted
  // 调接口、建立长连接、开启定时器
  componentDidMount() {
    console.log('componentDidMount')
  }
  countChange() {
    // 第一种写法
    // let { count } = this.state
    // count++
    // this.setState({count})

    // 第二种写法
    // this.setState(prevState=>{
    //   return {
    //     count: prevState.count+1
    //   }
    // })

    // 第三写法
    this.setState(prevState=>({
      count: prevState.count+1
    }))
  }
  /* 更新阶段 */
  // 开关：控制视图是否更新
  // 用于性能优化
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  // 视图更新已完成 updated
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  /* 销毁阶段 */
  // 组件销毁之前，beforeDestroy
  // 清除定时器，清除长连接
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }


  // 所有生命周期中，不能少
  // 组件初始化、组件更新时，都会触发
  render() {
    let { count } = this.state
    console.log('render')
    return (
      <div>
        <h1>测试生命周期</h1>

        <h2>{count}</h2>
        <button onClick={this.countChange.bind(this)}>计数</button>
      </div>
    )
  }
}
