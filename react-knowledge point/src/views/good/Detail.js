import React from 'react'

export default class GoodDetail extends React.Component {
  render() {
    console.log('detail props', this.props.match.params.id)
    return (
      <div>
        <h1>商品详情页</h1>
        <h3>{this.props.match.params.id}</h3>
        <h3>{this.props.match.params.name}</h3>
      </div>
    )
  }
}
