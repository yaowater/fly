import React from 'react'

export default class LiftA extends React.Component {
  onChildChange(e) {
    this.props.onChange(e.target.value)
  }
  render() {
    let { msg } = this.props
    return(
      <div>
        <h3>我是 A 组件</h3>
        <input value={msg} onChange={this.onChildChange.bind(this)}/>
      </div>
    )
  }
}
