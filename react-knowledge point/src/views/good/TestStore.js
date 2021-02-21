import React from 'react'

import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class TestStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      task: ''  // 绑存的task
    }
  }

  componentDidMount() {
    let { UserStore } = this.props.store
    // 调接口触发
    UserStore.getUsers({})
  }

  // 业务入参是怎么一步一步到达后端的？
  // 后端响应数据是怎么一步一步被过滤到达组件中的？
  createUserList(){
    let { UserStore } = this.props.store
    return UserStore.list.map(ele=>(
      <div key={ele._id}>
        <span>{ele.username}</span>
        <span>-</span>
        <span>{ele._id}</span>
      </div>
    ))
  }

  taskChange(arg, e) {
    let { TodoStore } = this.props.store
    // 根据idx修改store
    if(arg=='add') {
      this.setState({task: e.target.value})
    }else {
      TodoStore.updTodo({
        idx: arg,
        task: e.target.value
      })

    }
  }
  add(e) {
    if(e.keyCode==13) {
      let { TodoStore } = this.props.store
      TodoStore.addTodo({
        id: Date.now(),
        task: this.state.task
      })
      this.setState({task: ''})
    }
  }
  remove(idx) {
    let { TodoStore } = this.props.store
    TodoStore.delTodo(idx)
  }


  createTodoList() {
    let { TodoStore } = this.props.store
    return TodoStore.list.map((ele,idx)=>(
      <div key={ele.id}>
        <span>{ele.id}</span>
        <span>-</span>
        <input
          value={ele.task}
          onChange={this.taskChange.bind(this, idx)}
          />
        <span onClick={this.remove.bind(this, idx)}>X</span>
      </div>
    ))
  }

  render() {
    let { CountStore, TodoStore } = this.props.store
    let { task } = this.state
    return (
      <div>
        <h1>测试状态管理</h1>
        <h2>{CountStore.count}</h2>
        <hr/>
        <div  className='todo'>
          <div className='todo-top'>
            <span>{TodoStore.total}</span><span>条任务</span>
            <input
              value={task}
              onChange={this.taskChange.bind(this, 'add')}
              onKeyUp={this.add.bind(this)} />
          </div>
          <div className='todo-mid'>
            {this.createTodoList()}
          </div>
        </div>
        <hr/>
        {this.createUserList()}
      </div>
    )
  }
}

export default TestStore
