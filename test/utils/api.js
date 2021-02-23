import axios from './fetch'

// 获取热卖商品信息数组 {pageNum,pageSize,likeName}
export function fetchHotGoodsInfoList(data) {
    return axios({
        url: '/client/index/getHotGoodsInfoList.do',
        method: 'POST',
        data
    })
}








export default {
    fetchHotGoodsInfoList,
  
}