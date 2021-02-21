let baseUrl = 'http://localhost:9090'

function fetch(url,method,data,callback) {
  uni.request({
    url: baseUrl+url, //仅为示例，并非真实接口地址。
    data,
    headers: {
      token: ''
    },
    method,
    success: (res) => {
      // 过滤
      if(res.data.err===0) {
        callback(res.data.data)
      } else {
        uni.showToast({
          title: res.data.msg,
          duration: 2000
        })
      }
    },
    fail: (err)=>{
      uni.showToast({
        title: '网络异常，请稍后再试',
        duration: 2000
      })
    }
  })
}

export function fetchGoodList(data, callback) {
  fetch('/jd/getHotGoodList', 'GET', data, callback)
}
