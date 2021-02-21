var express = require('express');
var router = express.Router();
var goodModel = require('../model/cms/goodModel');

// 商品新增、编辑
router.post('/create', function(req, res, next) {
    let { id, name, desc, price, cate, img, hot, rank } = req.body
    // 必须验证
    if(!name) return res.json({err:1,msg:'name是必须字段'})
    let ele = {
        name,
        desc,
        price,
        cate,
        img,
        hot: (hot ? hot : false),
        rank: (rank ? rank : 0)
    }
    if(id) {
        // 编辑  
        goodModel.updateOne({_id:id}, {$set:ele}).then(()=>{
            res.json({err:0, msg:'修改成功'})
        })
    } else {
        // 新增
        console.log('ele', ele)
        ele.create_time = Date.now()
        goodModel.insertMany([ele]).then(()=>{
            res.json({err:0,msg:'添加成功'})
        })
    }
})

// 获取所有商品
router.get('/list', function(req, res) {
    let { page, size, cate } = req.query
    page = parseInt(page ? page : 1)
    size = parseInt(size ? size : 2)

    let q = {
        cate: cate ? cate : ''
    }
    if(!q.cate) delete q.cate

    goodModel.find(q).then(arr=>{
        let total = arr.length
        goodModel.find(q).skip((page-1)*size).limit(size).sort({rank:-1}).then(arr=>{
            res.json({err:0,msg:'success', data: {list:arr, total}})
        })
    })
})

// 获取商品详情
router.get('/detail', function(req, res) {
    let { id } = req.query
    goodModel.find({_id: id}).then(arr=>{
        res.json({err:0, msg:'success', data: arr[0]})
    })
})

module.exports = router;
