var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // 查询数据库
   res.render('index', { title: '200', arr: arr });
});


router.get('/testJson', function(req, res, next) {
    // 查询数据库
   res.jsonp({err: 0, msg: 'success', data: { name: 'abc'}})
});

router.post('/testPost', function(req, res) {
    res.json({err:0, msg:'success', data: {name:'12345678'}})
})

module.exports = router;
