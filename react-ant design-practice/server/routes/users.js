var express = require('express');
var router = express.Router();
var userModel = require('../db/userModel')
var jwt = require('../utils/jwt')

/* 注册 */
router.post('/regist', function(req, res) {
  let { username, password, password2 } = req.body
  if(!username || !password || !password2) {
    res.json({err: 1, msg: '注册信息不能为空'})
    return
  }
  if (password !== password2) {
    res.json({err: 1, msg:'两次密码输入不一致'})
    return
  }
  // 第1步：先判断用户名是否已被注册
  userModel.find({username}).then(arr=>{
    if(arr.length > 0) {
      res.json({err: 1, msg: '该用户名已被注册'})
    } else {
      // 第2步：注册
      userModel.insertMany([{username, password}]).then(()=>{
        res.json({err: 0, msg: 'success'});
      }).catch(error=>{
        res.json({err: 1, msg: 'fail'})
      })
    }
  })
})

/* 登录 */
router.post('/login', function(req, res) {
  let { username, password } = req.body
  userModel.find({username,password}).then(arr=>{
    if (arr.length > 0) {
      // 登录成功，把token返回给前端
      let token = jwt.generateToken({username, password})
      res.json({err:0, msg:'success', data: {token, username}})
    } else {
      res.json({err:1, msg: 'fail'})
    }
  })
})


/* 获取用户列表：测试跨域 */
router.get('/getAllUsers', function(req, res) {

  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");

  userModel.find().then(arr=>{
    res.jsonp({err:0, msg:'success', data: arr})
  }).catch(err=>{
    res.json({err:1, msg:'fail'})
  })
})

module.exports = router;
