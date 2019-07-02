const cluster = require('cluster')
const os = require('os')//获取CPU数量
const numCpus = os.cpus().length;

const process = require('process')

console.log('numCpus:', numCpus)


let workers = {}

if (cluster.isMaster) {
    //主进程分支
    cluster.on('death', function (worker) {
        //当一个工作进程结束时，重启工作进程
        worker = cluster.fork()
        workers[worker.pid] = worker
    })


    //初始开启与cpu数量相同的工作进程
    for (var i = 0; i < numCpus; i++) {
        var worker = cluster.fork()//每有一个内核，就复制一个进程出来
        workers[worker.pid] = worker
    }
} else {
    //工作进程分支，启动服务
    const app = require('./app')
    app.use(async (ctx, next) => {
        console.log('worker:', cluster.worker.id, ',PID:', process.pid);
        next()
    })
    app.listen(3000)
}

//守护进程
process.on('SIGTERM', function () {
    for (var pid in workers) {
        process.kill(pid)
    }
    process.exit(0)
})

require('./test')
