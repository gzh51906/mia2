const express = require('express')
const login = express.Router();
const msyql = require('./content_db');

login.get('/', async (req, res) => {
    let result = await msyql(`SELECT * FROM statu `);
    res.send(result);
})
login.patch('/', async (req, res) => {
    let { status } = req.body;
    let result = await msyql(`UPDATE statu SET status = ${status} WHERE id = ${0} `);
    res.send(result);
})

module.exports = login;