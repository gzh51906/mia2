const express = require('express')
const home = express.Router();
const msyql = require('./content_db');
home.get('/', async (req, res) => {
    let date = new Date().toLocaleString().slice(0, 8) //当前时间 如2019-9-6
    date = date.split('-').join("/");
    try {
        let res1 = await msyql("SELECT COUNT( username ) AS user FROM user"); //用username查看有多少用户
        let res2 = await msyql("SELECT COUNT(id) AS `order` FROM `order`");       //用id查看有多少订单
        let res3 = await msyql("SELECT COUNT( DISTINCT name ) AS type FROM kind"); //用top-type查看有多少类型，distinct去重
        let res4 = await msyql(`SELECT COUNT( username ) AS newuser FROM user where date='${date}'`); //多少今天注册的用户
        let res5 = await msyql('SELECT COUNT( id ) AS neworder FROM `order`' + `where date='${date}'`); //多少今天新增的订单
        let res6 = await msyql(`SELECT COUNT( DISTINCT name) AS oldtype FROM kind where date!='${date}'`); //除了今天的所有种类
        res.send([res1, res2, res3, res4, res5, res6]);
    } catch (err) {
        res.send(err);
    }
})

module.exports = home;