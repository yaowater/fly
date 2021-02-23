// import {
//     fetchUserCollectInfoList,
// } from '@/utils/api'
// import { Toast } from "vant";
import {
    fetchUserCollectInfoList,
} from '@/utils/api2'

export default {
    namespaced: true,
    state: {
        selectedAddress: [],
        areaArr: [],
      
    },
    getters: {
        parcelNumber(state) {
            let quantity = 0;
            state.orderInformationObj.userGoodsOrderDetailsInfoList && state.orderInformationObj.userGoodsOrderDetailsInfoList.map((ele) => {
                quantity += ele.userGoodsOrderLogisticsInfoList.length;
            });
            return quantity
        },
    },
    mutations: {
    
        changeReferrerInformationObj(state, payload) {
            state.referrerInformationObj = payload
        },
    },
    actions: {
        async actionFetchUserCollectInfoList(store, params) {
            await fetchUserCollectInfoList(params).then(res => {
                store.commit('changeMyCollectArr', res)
            })
        },
     
    }
}