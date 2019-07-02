const Koa = require('koa')
const app = new Koa()
app.use(ctx => {
    Math.random() > 0.8 ? abc() : ''
    ctx.body = 'hello dockerpm2'
})

app.listen(3000, () => {
    console.log('启动成功');
})