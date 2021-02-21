export default {
    namespaced: true,
    state: {
        foo: 'hello foo'
    },
    getters: {
        length: function(state) {
            return state.foo.length
        }
    },
    mutations: {
        changeFoo(state, payload) {
            state.foo = payload
        }
    }
}