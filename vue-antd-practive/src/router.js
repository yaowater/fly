import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/', component: () => import('./Layout.vue'),
            children: [
                {
                    path: '', component: () => import('./views/Home.vue'), meta: {
                        title: "数据驾驶舱"
                    }
                },
                {
                    path: 'userlist', component: () => import('./views/User/UserList.vue'), meta: {
                        title: "员工列表",
                        module: "员工管理"
                    }
                },
                {
                    path: 'worklist', component: () => import('./views/Work/WorkList.vue'), meta: {
                        title: "工单列表",
                        module: "业务管理"
                    }
                }
            ]

        },
        {
            path: '/login', component: () => import('./views/User/Login.vue'), meta: {
                title: "登录"
            }
        },
        { path: '*', component: () => import('./Error404.vue') },

    ]
})


router.beforeEach((to, from, next) => {
    // <div class="global-loading"></div>

    let loadingBar = document.getElementById("global-loading")
    if (!loadingBar) {
        let loadingBar = document.createElement('div')
        loadingBar.id = 'global-loading'
        document.body.append(loadingBar)
    } else {
        loadingBar.style.display = 'block'
    }

    document.title = "英雄联盟LOL" + "-" + to.meta.title;
    setTimeout(() => {
        next()
    }, 300)

})

router.afterEach(() => {
    let loadingBar = document.getElementById("global-loading")
    if (loadingBar) loadingBar.style.display = 'none'
})
export default router