import Vue from 'vue'
import Vuex from 'vuex'

// 子store(modules)
import testStore from './modules/test'
import todoStore from './modules/todo'
import goodStore from './modules/good'

Vue.use(Vuex)

// 超市、银行
const store = new Vuex.Store({
    // 挂载子store
    modules: {
        test: testStore,
        todo: todoStore,
        good: goodStore
    }
})

export default store
