import { observable, action, computed } from 'mobx'

export default class TodoStore {
  @observable list = []
  @computed get total() {
    return this.list.length
  }
  @action addTodo(payload) {
    this.list.push(payload)
  }
  @action delTodo(payload) {
    this.list.splice(payload, 1)
  }
  @action clearTodo() {
    this.list = []
  }
  @action updTodo(payload) {
    this.list[payload.idx].task = payload.task
  }
}
