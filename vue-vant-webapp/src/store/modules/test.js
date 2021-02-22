// 引入封装的api方法
import { getCnodeList } from '@/utils/api'

export default {
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
    actions: {
        ajaxCnode(store, params) {  // this.$store
            getCnodeList(params).then(res=>{
                // store.state.cnodelist = res
                store.commit('changeCnodeList', res)
            })
        }
    }
}
