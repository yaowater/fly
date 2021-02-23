import {
    fetchUserAddressInfoList
} from '@/utils/api'
export default {
    namespaced: true,
    state: {
        find: {},
        selectType: false, //detail中弹窗是否开启 true开启
        select: false, //detail中是否选择类型     true选择
        typeId: 0, //detail中选择的类型Id
        selectedAddressId: 0, //detail中选择的地址Id
        selectedAddress: [], //detail中选择的地址
        catesIndex: 0,
        classifyLeftScrollTop: 0,
        goodsScore: 0,
        singleCommoditiesObj: {},//创建单个商品的订单信息
        searchContent: ""//搜索内容

    },
    mutations: {
        // 向find中添加一条缓存
        updateFind(state, payload) {
            state.find[payload.idx] = payload.list
        },
        // 清除所有缓存数据
        clearFind(state) {
            state.find = {}
        },
        changeSelectType(state, payload) {
            state.selectType = payload
        },
        changeSelect(state, payload) {
            state.select = payload
        },
        changeTypeId(state, payload) {
            state.typeId = payload
        },
        changeSelectedAddressId(state, payload) {
            state.selectedAddressId = payload
        },
        changeSelectedAddress(state, payload) {
            state.selectedAddress = payload && payload.userAddressInfoDOList[state.selectedAddressId]
        },
        changeCatesIndex(state, payload) {
            state.catesIndex = payload
        },
        changeClassifyLeftScrollTop(state, payload) {
            state.classifyLeftScrollTop = payload
        },
        changeGoodsScore(state, payload) {
            state.goodsScore = payload
        },
        changeSingleCommoditiesObj(state, payload) {
            state.singleCommoditiesObj = payload
        },
        changeSearchContent(state, payload) {
            state.searchContent = payload
        },
    },
    actions: {
        actionsFetchUserAddressInfoList(store, params) {
            fetchUserAddressInfoList(params).then(res => {
                store.commit("changeSelectedAddress", res)
            })
        }
    }
}