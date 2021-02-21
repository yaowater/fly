import React from 'react'

import { Child3 } from '@/components'
export default class TestContext extends React.Component {
  render() {
    return(
      <div>
        <h1>测试上下文</h1>
        <Child3 />
      </div>
    )
  }
}
