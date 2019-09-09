const express = require('express')  //银镜express
const { PORT } = require('./config.json')  //引进端口文件
const Router = require('./router')  //引进router/index.js文件
const app = express()   //创建服务器
app.use(express.static('./'))  //创建静态资源服务器
app.use(Router);  //调用router/index.js文件
app.listen(PORT, (req, res) => {  //监听端口号
    console.log(`${PORT} 服务端口启动成功`)
})

