import React from 'react'

import ThemeCtx from '@/utils/theme'

class Child3 extends React.Component {
  render() {
    console.log('context', this.context)
    const ctx = this.context
    return(
      <ThemeCtx.Consumer>
      {
        (ctx)=>(
          <div style={{color: ctx.color, background: ctx.background }}>
            <h3>我的子组件</h3>
          </div>
        )
      }
      </ThemeCtx.Consumer>
    )
  }
}

export default Child3

// 第二种写法：

// 添加上下文
// Child3.contextType = ThemeCtx

// <div style={{color: this.context.color, background: this.context.background }}>
//   <h3>我的子组件</h3>
// </div>
