import React from 'react'

export default class Checkbox extends React.Component {

  change(e) {
    let { value } = this.props
    if (e.target.checked) {
      // 添加一个选择
      value.push(parseInt(e.target.value))
    } else {
      // 取消一个选择
      value = value.filter(ele=>ele!=parseInt(e.target.value))
    }
    this.props.onChange(value)
  }

  createOptions() {
    let { options, value } = this.props
    let arr = []
    options.map(ele=>{
      if(value.includes(ele.id)){
        ele.checked = true
      }else{
        ele.checked = false
      }
      arr.push(
        <span key={ele.id}>
          <input
            type="checkbox"
            value={ele.id}
            checked={ele.checked}
            onChange={this.change.bind(this)}
          />
          <span>{ele.name}</span>
        </span>
      )
    })
    return arr
  }

  render() {
    return (
      <div className='checkbox'>
        {this.createOptions()}
      </div>
    )
  }
}
