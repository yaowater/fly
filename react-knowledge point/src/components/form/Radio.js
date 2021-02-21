import React from 'react'

export default class Radio extends React.Component {

  change(e) {
    console.log(e.target.value)
    this.props.onChange(e.target.value)
  }

  createOptions() {
    let { options, value } = this.props
    return options.map(ele=>(
      <span key={ele.id}>
        <input
          type="radio"
          checked={ele.id==value}
          value={ele.id}
          onChange={this.change.bind(this)}
        />
        <span>{ele.name}</span>
      </span>
    ))
  }

  render() {
    return(
      <div>
        {this.createOptions()}
      </div>
    )
  }
}
