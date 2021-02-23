import Vue from 'vue'
import Vuex from 'vuex'

import persistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
import userStore from './modules/user'
import classifyStore from './modules/classify'
import cartStore from './modules/cart'
import homeStore from './modules/home'

Vue.use(Vuex)




const store = new Vuex.Store({
    // 挂载子store
    modules: {
        user: userStore,
        classify: classifyStore,
        cart: cartStore,
        home: homeStore,
    },
    plugins:
        //  [persistedState()]

        [
            persistedState({ storage: window.sessionStorage })
        ]

    // [
    //     persistedState({
    //         storage: {
    //             getItem: key => Cookies.get(key),
    //             setItem: (key, value) => Cookies.set(key, value, { expires: 1 }),
    //             removeItem: key => Cookies.remove(key)
    //         }
    //     })
    // ]
})

export default store