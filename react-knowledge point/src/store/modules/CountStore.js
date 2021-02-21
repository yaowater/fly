import { observable, action } from 'mobx'

// observable 用于定义可共享的数据
// action用于修改方法，不区分mutations和actions

export default class CountStore {
  @observable count = 10000

  @action addCount(payload) {
    this.count += payload
  }
  @action subCount(payload) {
    this.count -= payload
  }
}
