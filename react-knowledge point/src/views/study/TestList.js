import React from 'react'

// 列表渲染
// map()  箭头函数

// (ele,idx,abc)=>{
//   // 语句
//   ele.checked = true
//   return ele
// }
//
// (ele,idx,abc)=>(ele)

// 如果被渲染的数组需要做一定数据处理，建议封装方法来实现
// 如果被渲染的数组比较简单，可以直接在render的return中写

export default class TestList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: 'lisi'},
        { id: 2, name: 'zhangsan'},
        { id: 3, name: 'wangwu'},
        { id: 4, name: 'zhaoliu'},
        { id: 5, name: 'wuqi'}
      ]
    }
  }

  rowClick(ele) {
    console.log('ele', ele)
  }

  createList1() {
    let { list } = this.state
    return list.map(ele=>(
      <div key={ele.id} onClick={()=>this.rowClick(ele)}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))
  }

  createList2() {
    let { list } = this.state
    let arr = []
    list.map(ele=>{
      // 语句
      ele.grade = '2002'
      // 数据处理、业务处理
      arr.push(
        <div key={ele.id}>
          <span>{ele.id}</span>
          <span>-</span>
          <span>{ele.name}</span>
          <span>-</span>
          <span>{ele.grade}</span>
        </div>
      )
    })
    return arr
  }

  render() {
    let { list } = this.state
    let list2 = list.map(ele=>(
      <div key={ele.id}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))

    return(
      <div>
        <h1>测试列表渲染</h1>

        {
          list.map(ele=>(
            <div key={ele.id}>
              <span>{ele.id}</span>
              <span>-</span>
              <span>{ele.name}</span>
            </div>
          ))
        }
        <hr/>
        { this.createList1() }
        <hr/>
        { this.createList2() }
        <hr/>
        { list2 }
        
      </div>
    )
  }
}
