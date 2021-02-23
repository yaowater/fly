// 模块引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册，使用Vue.use()注册路由
Vue.use(VueRouter)

// 首页
const Home = () => import('@/views/home/Home.vue')


const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  routes: [
    // 首页
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: false,
        deepth: 1
      }
    },
    {
      path: '/referrersharingpageposter',
      name: 'referrersharingpageposter',
      component: ReferrerSharingPagePoster,
      meta: {
        keepAlive: false,
        deepth: 1 // 是否需要被缓存
      }
    },

    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: false,
        deepth: 1 // 是否需要被缓存
      }
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetPassword,
      meta: {
        keepAlive: false,
        deepth: 1 // 是否需要被缓存
      }
    },
    {
      path: '/authcodelogin',
      name: 'authcodelogin',
      component: AuthCodeLogin,
      meta: {
        keepAlive: false,
        deepth: 1 // 是否需要被缓存
      }
    },

    // 注册
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        keepAlive: false,
        deepth: 1 // 是否需要被缓存
      }
    },



    // 重定向
    {
      path: '/*',
      redirect: '/home'
    },



  ]
})

router.beforeEach((to, from, next) => {
  // if (to.path === '/cart' || to.path === '/user') {
  if (to.path === '/cart' || to.path === '/user') {
    let token = sessionStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
      // next()
    }
  } else {
    next()
  }
})

export default router