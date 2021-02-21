// 引入封装的api方法
import { getCnodeList } from '@/utils/api'

export default {
    // 开启子模块的命名空间，这个必须要开启，否则这个子
    namespaced: true,
    // 要被共享的数据，都放在state
    state: {
        msg: 'hello vuex',
        count: 1,
        todolist: [
            {id: 1, task: '吃饭'},
            {id: 2, task: '睡觉'},
        ],
        cnodelist: []
    },
    // 相当于是计算属性
    // 当被关联的state变量发生变化时，getters变量会重新计算
    getters: {
        total: function(state) {
            return state.todolist.length
        }
    },
    // 是用于改变与修改state的。
    // 当state被修改完成，页面视图自动更新
    mutations: {
        addCount(state)  {
            console.log('-----add')
            state.count++
        },
        subCount(state) {
            console.log('------sub')
            state.count--
        },
        addTodo(state, payload) {
            state.todolist.push(payload)
        },
        delTodo(state, idx) {
            state.todolist.splice(idx, 1)
        },
        clearTodo(state) {
            state.todolist = []
        },
        changeCnodeList(state, payload) {
            state.cnodelist = payload
        }
    },
    // action是Vuex官方建议的，与后端接口对接的入口
    // 工作中，一般让那些需要被多个组件共享的后端数据，走action
    // 在action中，可能直接修改state，但是不推荐这么做
    actions: {
        ajaxCnode(store, params) {  // this.$store
            getCnodeList(params).then(res=>{
                // store.state.cnodelist = res
                store.commit('changeCnodeList', res)
            })
        }
    }
}
