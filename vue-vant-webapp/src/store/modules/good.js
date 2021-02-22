
export default {
    namespaced: true,
    state: {
        find: {},
    },
    getters: {},
    mutations: {
        // 向find中添加一条缓存
        updateFind(state, payload) {
            console.log('-------', payload)
            state.find[payload.idx] = payload.list
        },
        // 清除所有缓存数据
        clearFind(state) {
            console.log('clear')
            state.find = {}
        }
    },
    actions: {}
}