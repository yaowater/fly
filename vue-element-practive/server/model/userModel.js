const mongoose = require('mongoose')

// 第1步：创建一个Schema

// 这个model就是来做增删改查
// .find()  .insertMany()  .updateOne()  .deleteOne()  
// .limit()  .skip()  .sort()  .count()

module.exports = mongoose.model('users', mongoose.Schema({
    username: String,
    password: String,
    create_time: Number
}))