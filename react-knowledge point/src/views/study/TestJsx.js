// react组件有多少种定义方式？
// 类组件
// 函数组件（无状态组件）
// ES5组件 React.createElement()
// Hooks组件
// 高阶组件


// 如何理解JSX？  JavaScript XML 语法糖
// jsx就是一个变量
// jsx也是一个对象
// jsx中可以使用静态属性
// jsx中还可以使用动态属性
// jsx本身就是表达式，它的内部还可以使用表达式（用大括号包裹）
// jsx可以任意嵌套（用大括号包裹）
// jsx中的注释也是变量，所以也用大括号包裹
// jsx中可防注入攻击，随意使用用户的输入


// import React, { Component } from 'react'
import React from 'react'

const ele = <h2>我是一个jsx变量</h2>

export default class TestJsx extends React.Component {
  constructor(props) {
    super(props)
    // 声明式变量定义的地方
    this.state = {
      msg: 'hello msg jsx',
      color: 'red',
      style: { color:'gray', fontSize:'50px' }
    }
  }
  createChild() {
    return (
      <div>
        <span>我是一个span</span>
        {ele}
      </div>
    )
  }
  changeColor() {
    this.setState({
      color: 'blue'
    })
  }
  render() {
    return (
      <div>
        <h1>测试jsx</h1>
        {ele}
        {/* 这是注释 */}
        <h2 title='jsx'>给jsx变量添加静态属性</h2>
        <h2 className={this.state.color}>给jsx变量添加动态属性</h2>
        <button onClick={this.changeColor.bind(this)}>改变颜色</button>
        <h2>{this.state.msg}</h2>
        <h2>{this.createChild()}</h2>
        <h2 style={{color:'orange', fontSize:'50px'}}>绑定静态的style样式</h2>
        <h2 style={this.state.style}>绑定动态的style样式</h2>
      </div>
    )
  }
}
