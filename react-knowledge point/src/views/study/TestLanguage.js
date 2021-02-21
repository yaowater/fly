import React from 'react'
import { Child2 } from '@/components'

// 父子组件通信
// 父传子，使用props
// 子传父，使用自定义事件

export default class TestLanguage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 4
    }
  }
  langHandle(id) {
    console.log('父',id)
    this.setState({lang: id})
  }
  render() {
    let { lang } = this.state
    return (
      <div>
        <h1>测试父子组件通信</h1>

        {/* lang是自定义属性，子组件通过 this.props.lang 来取值 */}
        {/* onChange是自定事件，子组件通过 this.props.onChange('arg')来触发，向父组件传值 */}
        <Child2 lang={lang} onChange={this.langHandle.bind(this)} />
      </div>
    )
  }
}
