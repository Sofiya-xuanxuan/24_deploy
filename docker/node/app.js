const Koa = require('koa')
const app = new Koa()
app.use(ctx => {
    // Math.random() > 0.9 ? abc() : ''
    ctx.body = 'hello dockernode！！！！'
})

app.listen(3000, () => {
    console.log('app start success 3000');
})