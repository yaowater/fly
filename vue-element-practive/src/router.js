import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from '@/views/'
const Login=()=>import('./components/login/Login.vue')

const arr = []
// 一层循环
routes.map(ele=>{
    if(ele.children) {
        // 二层循环
        ele.children.map(ele=>{
            arr.push({path: ele.path, component: ele.component})
        })
    }
})

const router= new VueRouter({
    routes:[
        ...arr,
        { path:'/login',components: {login:Login}},
        // { path:'/*',redirect:'/login'}
    ]
})

export default router