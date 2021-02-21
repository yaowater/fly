// 模块引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册，使用Vue.use()注册路由
Vue.use(VueRouter)

// 路由懒加载，按需加载，节省应用程序的性能

const Home = ()=>import('@/views/Home.vue')
const Find = ()=>import('@/views/Find.vue')
const Cart = ()=>import('@/views/Cart.vue')
const User = ()=>import('@/views/User.vue')
const Detail = ()=>import('@/views/Detail.vue')
const Regist = ()=>import('@/views/Regist.vue')
const Login = ()=>import('@/views/Login.vue')

const router = new VueRouter({
    // 用于指定路由模式，常用有两种，分别是hash和history
    mode: 'hash',
    // 定义路由匹配规则
    routes: [
        { path: '/home', component: Home},
        { path: '/find', component: Find},
        { path: '/Cart', component: Cart},
        { path: '/user', component: User },
        { path: '/detail/:id', component: Detail},
        { path: '/regist', component: Regist },
        { path: '/login', component: Login },

        { path: '/*', redirect: '/home'}
    ]
})

// 全局路由守卫
router.beforeEach((to,from,next) =>{
    console.log('to', to)
    console.log('from', from)
    if(to.path==='/cart' || to.path==='/user') {
        // 判断有没有token
        let token = localStorage.getItem('token')
        if(token) {
            next()
        } else {
            // 不让你过去
            next('/login')
        }
    } else {
        next()
    }
    
})

// 使用ES6的模块化语法，把当前路由实例抛出去
export default router