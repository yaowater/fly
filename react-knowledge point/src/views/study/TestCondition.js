import React from 'react'

// 条件渲染
// 意思是在特定条件下都会被显示、渲染出来的视图
// v-show  v-if

// 1- &&
// 2- 三元表达式
// 3- switch
// 4- display属性

export default class TestCondition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bol1: true,
      bol2: false,
      bol3: 1,
      dis: 'none'
    }
  }
  // 相当于是 v-if v-else-if v-else
  // 使用switch实现条件渲染，性能更高
  createView() {
    let { bol3 } = this.state
    let ele = null
    switch (bol3) {
      case 1:
        ele = <div>444444</div>
        break;
      case 2:
        ele = <div>555555</div>
        break;
      case 3:
        ele = <div>666666</div>
        break;
      case 4:
        ele = <div>777777</div>
        break;
      default:
        ele = <div>888888</div>
    }
    return ele
  }
  render() {
    let { bol1, bol2, dis } = this.state
    return (
      <div>
        <h1>测试条件渲染</h1>

        { bol1 && <div>111111</div> }
        <hr/>
        { bol2 && <div>222222</div>}
        { !bol2 && <div>333333</div>}
        <hr/>
        { bol2 ? <div>222222</div> : <div>333333</div>}
        <hr/>

        { this.createView() }
        <hr/>

        <div style={{display: dis}}>999999</div>


      </div>
    )
  }
}
