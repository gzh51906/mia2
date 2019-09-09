const express = require('express');
const order = express.Router();
const mysql = require('./content_db');

order.get('/', async (req, res) => {
    let { number } = req.query;
    number = (number - 1) * 7;
    // try {
    let result = await mysql('SELECT * FROM `order`' + `LIMIT ${number}, 7`)
    let result2 = await mysql('SELECT COUNT( id ) AS `order` FROM `order`')
    res.send([result, result2])
    // } catch (err) {
    //     res.send(err);
    // }

})
order.delete('/', (req, res) => {
    let { id } = req.query;
    try {
        mysql(`DELETE FROM bfms.order WHERE id= '${id}'`)
    } catch (err) {
        res.send(err);
    }
});

module.exports = order;