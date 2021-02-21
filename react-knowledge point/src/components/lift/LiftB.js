import React from 'react'
import PropTypes from 'prop-types'

class LiftB extends React.Component {
  render() {
    let { msg } = this.props
    return(
      <div>
        <h3>我是 B 组件</h3>
        <h3>{msg}</h3>
      </div>
    )
  }
}

LiftB.propTypes = {
  msg: PropTypes.string.isRequired  // 数据类型的检查、是否必填
}

export default LiftB
