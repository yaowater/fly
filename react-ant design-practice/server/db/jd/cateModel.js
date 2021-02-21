var mongoose = require('mongoose')

module.exports = mongoose.model('cates', mongoose.Schema({
  rank: Number, // 排序
  cate: String, // 英文字段
  cate_zh: String  // 中文字符


  // cate: String,
  // cate_zh: String,
  // create_time: Number
}))
