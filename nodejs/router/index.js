const express = require('express');                  //引入express第三方模块
const Router = express.Router();                     //创建路由，下面为引入自定义插件
const home = require('./home')                       //首页
const user = require("./user")                       //用户列表
const order = require("./order")                     //订单列表
const list = require('./list');                      //列表
const add = require("./add");                        //添加列表
const login = require('./login')


Router.use(express.json(), express.urlencoded({ extended: false }))

Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS,");
    if (req.method == "OPTIONS") {// 在预请求中告诉浏览器这里允许跨域，让她发真实的请求过来吧
        res.sendStatus(200);
        // 等效于：res.status(200).send()
    } else {
        next();
    }
})


Router.use('/home', home);
Router.use('/user', user);
Router.use('/order', order);
Router.use('/list', list);
Router.use('/add', add);
Router.use('/login', login);


module.exports = Router; //导出