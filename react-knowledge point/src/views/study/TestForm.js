import React from 'react'

// 表单使用
// value和onChange必须配合使用，那么这种表单就是受控表单
// 受控表单是单向绑定的
// 受控表单指的是，表单的value值由state来决定和控制

// 非受控表单，指的是它的value不受state控制
// React强烈建议，不要使用非受控表单（除文件上传表单外）
// <input type="file"/>

export default class TestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'wangwu',
      addr: '',
      src: '',
      fav: '3',
      info: {
        myName: '',
        myPass: '',
        myPhone: '',
        myFav: '',
        myAgree: false,
        myGender: '1'
      }
    }
  }

  submit() {
    let data = {
      name: this.state.name,
      pass: document.getElementById('pass').value,
      phone: this.refs.phone.value,
      addr: this.state.addr,
      src: this.state.src,
      fav: this.state.fav
    }
    console.log('表单取值', data)
  }
  nameChange(e) {
    // console.log('name', e.target.value)
    this.setState({name: e.target.value})
  }
  addrInput(e) {
    console.log('addr', e.target.value)
    this.setState({addr: e.target.value})
  }
  favChange(e) {
    console.log(e.target)
    this.setState({fav: e.target.value})
  }

  //************************
  submit2() {
    console.log('data', this.state.info)
  }
  myChange(k, e) {
    let { info } = this.state
    if (k === 'myAgree') {
      info[k] = e.target.checked
    } else {
      info[k] = e.target.value
    }
    this.setState({info: info})
  }

  render() {
    let { name, fav, info } = this.state
    console.log('info', info)
    return (
      <div>
        <h1>测试表单</h1>

        {/*受控表单：与state紧紧关联*/}
        <input
          value={name}
          onChange={this.nameChange.bind(this)}
          type="text"
        />

        {/*非受控表单：与state无关*/}
        <br/>
        <input id='pass' type="text"/><br/>
        <input ref='phone' type="text"/><br/>
        <input onInput={this.addrInput.bind(this)} type="text"/><br/>

        {/*唯一被支持的非受控表单*/}
        <input type="file"/><br/>


        {/*受控表单*/}
        <select value={fav} onChange={this.favChange.bind(this)}>
          <option value="1">音乐</option>
          <option value="2">跑步</option>
          <option value="3">读书</option>
        </select>
        <br/>
        <button onClick={this.submit.bind(this)}>提交</button>

        <hr/>

        <div>
          <span>用户名：</span>
          <input value={info.myName} onChange={this.myChange.bind(this,'myName')} type="text"/>
        </div>
        <div>
          <span>密码：</span>
          <input value={info.myPass} onChange={this.myChange.bind(this,'myPass')} type="text"/>
        </div>
        <div>
          <span>手机：</span>
          <input value={info.myPhone} onChange={this.myChange.bind(this,'myPhone')} type="text"/>
        </div>
        <div>
          <select value={info.myFav} onChange={this.myChange.bind(this,'myFav')}>
            <option value="1">音乐</option>
            <option value="2">跑步</option>
            <option value="3">读书</option>
          </select>
        </div>
        <div>
          <span>性别：</span>
          <input
            name='gender'
            value='1'
            checked={info.myGender=='1'}
            onChange={this.myChange.bind(this, 'myGender')}
            type="radio"/>
            <span>男</span>
          <input
            name='gender'
            value='2'
            checked={info.myGender=='2'}
            onChange={this.myChange.bind(this, 'myGender')}
            type="radio"/>
            <span>女</span>
        </div>
        <div>
          <input checked={info.myAgree} onChange={this.myChange.bind(this,'myAgree')} type="checkbox"/>
          <span>是否同意该协议：</span>
        </div>
        <button onClick={this.submit2.bind(this)}>提交</button>

      </div>
    )
  }
}

// <div>
//   <span>性别：</span>
//   <input name='a' value='1' onChange={this.myChange.bind(this,'myGender')} type="radio"/>
//   <span>男</span>
//   <input name='a' value='2' onChange={this.myChange.bind(this,'myGender')} type="radio"/>
//   <span>女</span>
// </div>
