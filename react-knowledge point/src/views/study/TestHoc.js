import React from 'react'

// 高阶函数、容器组件
import hoc from '@/utils/hoc'

// UI组件
class TestHoc extends React.Component {
  render() {
    return(
      <div>
        <h1>测试高阶组件</h1>
        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}

export default hoc(TestHoc)
