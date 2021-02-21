import React from 'react'

// 事件绑定的三种写法（两种方式）
// bind() 方式绑定
// 箭头函数方式绑定

// 如何拿事件对象？
// bind()方式绑定时，事件对象就是对事函数的最后一个参数
// 箭头函数方式绑定时，要手动地传递事件对象 {(e)=>this.eventHandle(e)}

// 如何阻止默认事件？阻止冒泡？
// 跟ES5的原生写法一样

// 如何监听表单的键盘事件？
// 绑定onKeyUp事件，使用 e.keyCode 来区分哪个键盘

// 事件如何传参？
// bind()方式绑定，this.clickHandle.bind(this, 'arg1', 'arg2')
// 箭头函数方式绑定，(e)=>this.clickHandle('arg1', e, 'arg2')


export default class TestEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'helle evnet'
    }
    this.clickHandle2 = this.clickHandle.bind(this, '222')
  }

  clickHandle(arg, e) {
    console.log(arg, e)
    console.log('this', this)
  }
  linkHandle(e) {
    // 阻止默认事件
    e.preventDefault()
  }

  inputHandle(e) {
    console.log('code', e.keyCode)
    if(e.keyCode==13) {
      // 提交表单
      console.log('提交表单')
    }
  }

  render(){
    return(
      <div>
        <h1>测试事件</h1>
        <div onClick={this.clickHandle.bind(this, '111')}>事件绑定1</div>
        <div onClick={this.clickHandle2}>事件绑定2</div>
        <div onClick={(e)=>this.clickHandle('333', e)}>事件绑定3</div>

        {/*阻止默认事件*/}
        <a href="https://baidu.com" onClick={this.linkHandle.bind(this)}>百度</a><br/>

        {/*获取键盘事件*/}
        <input type="text" onKeyUp={this.inputHandle.bind(this)}/>

      </div>
    )
  }
}
