module.exports={
    devServer:{
        port:'8090',
        // 绕开浏览器,代理
        proxy: {
            '/api':{
                target:'http://localhost:9999',
                changeOrigin:true,
                ws:true
            }
        }
    }
}