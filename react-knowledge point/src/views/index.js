import loadable from '@loadable/component'

// 代码拆分（代码分割）
const TestJsx = loadable(()=>import('./study/TestJsx'))
const TestProps = loadable(()=>import('./study/TestProps'))
import TestEvent from './study/TestEvent'
import TestLanguage from './study/TestLanguage'
import TestCondition from './study/TestCondition'
import TestList from './study/TestList'
import TestForm from './study/TestForm'
import TestLife from './study/TestLife'
import TestLift from './study/TestLift'
import TestComposition from './study/TestComposition'
import TestContext from './study/TestContext'
import TestHoc from './study/TestHoc'
import TestFrag from './study/TestFrag'
import TestHooks from './study/TestHooks'

// 商品
const Good = loadable(()=>import('./good/Good'))
const GoodDetail = loadable(()=>import('./good/Detail'))
const TestStore = loadable(()=>import('./good/TestStore'))

const routes = [
  {
    id: 1,
    path: '/jsx',
    component: TestJsx,
    text: '测试JSX',
    icon: ''
  },
  {
    id: 2,
    path: '/props',
    component: TestProps,
    text: 'props传值',
    icon: ''
  },
  {
    id: 3,
    path: '/event',
    component: TestEvent,
    text: '事件绑定',
    icon: ''
  },
  {
    id: 4,
    path: '/lang',
    component: TestLanguage,
    text: '语言选择',
    icon: ''
  },
  {
    id: 5,
    path: '/cond',
    component: TestCondition,
    text: '条件渲染',
    icon: ''
  },
  {
    id: 6,
    path: '/list',
    component: TestList,
    text: '列表渲染',
    icon: ''
  },
  {
    id: 7,
    path: '/form',
    component: TestForm,
    text: '表单绑定',
    icon: ''
  },
  {
    id: 8,
    path: '/life',
    component: TestLife,
    text: '生命周期',
    icon: ''
  },
  {
    id: 9,
    path: '/lift',
    component: TestLift,
    text: '状态提升',
    icon: ''
  },
  {
    id: 10,
    path: '/coms',
    component: TestComposition,
    text: '组合模式',
    icon: ''
  },
  {
    id: 11,
    path: '/ctx',
    component: TestContext,
    text: '上下文',
    icon: ''
  },
  {
    id: 12,
    path: '/hoc',
    component: TestHoc,
    text: '高阶组件',
    icon: ''
  },
  {
    id: 13,
    path: '/frag',
    component: TestFrag,
    text: '片段碎片',
    icon: ''
  },
  {
    id: 14,
    path: '/hooks',
    component: TestHooks,
    text: 'HOOKS',
    icon: ''
  },
  {
    id: 15,
    path: '/good',
    component: Good,
    text: '商品列表',
    icon: '',

    // 二组路由
    children: [
      {
        id: 1501,
        path: '/good/detail/:id/:name',  // 动态路由
        component: GoodDetail,
        text: '商品详情',
        icon: ''
      }
    ]
  },
  {
    id: 16,
    path: '/store',
    component: TestStore,
    text: '状态管理',
    icon: ''
  }
]

export default routes
