
const Home=()=>import('./mange/Home.vue')

// 商品管理模块
const GoodAdd = ()=>import('./good/Add.vue')
const GoodList = ()=>import('./good/List.vue')
const Chat = ()=>import('./mange/Chat.vue')

export default [
    {
        id: 1,
        text: '商品管理',
        icon: 'el-icon-location',
        children: [
            { id: 11, text: '商品新增', path: '/goodadd/:id', component: GoodAdd, icon: 'el-icon-share' },
            { id: 12, text: '商品列表', path: '/good/list', component: GoodList, icon: 'el-icon-s-goods' }
        ]
    },
    {
        id: 2,
        text: '概况管理',
        icon: 'el-icon-platform-eleme',
        children: [
            { id: 21, text: '首页管理', path: '/home', component: Home, icon: 'el-icon-s-tools'},
            { id: 22, text: '消息管理', path: '/chat', component: Chat, icon: 'el-icon-s-tools'}
        ]
    }
]