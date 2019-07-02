const mongoose = require('mongoose')
//1.连接
mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true })

const conn = mongoose.connection

conn.on('error', () => console.log('连接数据库失败'))
