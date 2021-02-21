import React from 'react'
import { Modal } from '@/components'

// 组合
// 在react实践开发，官方建议使用组合进行组件复用，而不是继承
// props是父子组件之间沟通的纽带
// 在组合实现组件复用时，props传递的是jsx对象或者是自定义组件

function PromotBtn(props) {
  return (
    <div>
      <span>确定</span>
      <span>取消</span>
    </div>
  )
}

function PromotContent(props) {
  return (
    <div>
      <div>请输入用户名</div>
      <input type="text"/>
    </div>
  )
}

// 组件定义，使用函数式继承、无状态组件
export default class TestComposition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true   // 用于输入框的显示与隐藏
    }
  }

  onClose() {
    console.log('1 close')
    this.setState({show: false})
  }

  render() {
    return(
      <div>
        <h1>测试组合</h1>
        <Modal
          tip={<span>提示</span>}
          content={<h3>你确定要删除吗？</h3>}
          btn={<span>确定</span>}
          show={false}
        />

        <Modal
          tip={<span>警告</span>}
          content={<h3>你的操作发生严重的失误</h3>}
          btn={<div><span>确定</span><span>取消</span></div>}
          show={false}
        />

        <Modal
          tip={<span>输入框</span>}
          content={<PromotContent />}
          btn={<PromotBtn />}
          show={this.state.show}
          onClose={this.onClose.bind(this)}
        />
      </div>
    )
  }
}
