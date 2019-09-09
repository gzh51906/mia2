const express = require('express');                  //引入express第三方模块
const list = express.Router();                   //创建路由
const mysql = require('./content_db');
list.get('/', async (req, res) => {
    let { number, type } = req.query;
    number = (number - 1) * 7;
    try {
        let result = await mysql(`SELECT * FROM ${type} LIMIT ${number}, 7`)
        let result2 = await mysql(`SELECT COUNT( id ) AS ${type} FROM ${type} `)
        res.send([result, result2])
    } catch (err) {
        res.send(err);
    }


})
list.delete('/', (req, res) => {
    let { id, type } = req.query;
    try {
        mysql(`DELETE FROM bfms.${type} WHERE id= '${id}'`)
    } catch (err) {
        res.send(err);
    }

})

module.exports = list;