const Koa = require('koa')
const mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true })

const Cat = mongoose.model('Cat', { name: String })

Cat.deleteMany({})

const kitty = new Cat({ name: 'zildjian' })
kitty.save().then(() => console.log('meow'))

const app = new Koa()
app.use(async ctx => {
    ctx.body = await Cat.find()
})
app.listen(3000, () => {
    console.log('启动成功');
})