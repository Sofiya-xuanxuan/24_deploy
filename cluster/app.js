const Koa = require('koa')
//创建一个koa对象表示web app本身
const app = new Koa();

//对于任何请求，app将调用该异步函数处理请求
app.use(async (ctx, next) => {
    //随机产生错误
    Math.random() > 0.9 ? aaaaaa() : '2'
    await next();
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>hello koa2</h1>'
})

//!module.parent用于在没有require的情况下直接运行某段代码，如果是被require的，则不执行。
if (!module.parent) {
    //直接执行：nodemon app.js
    app.listen(3000)
    console.log('app started at port 3000');

} else {
    //引入到别的文件，执行别的文件
    module.exports = app
}