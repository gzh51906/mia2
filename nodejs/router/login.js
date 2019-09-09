const express = require('express')
const login = express.Router();
const msyql = require('./content_db');

login.get('/', async (req, res) => {
    let result = await msyql(`SELECT * FROM statu `);
    res.send(result);
})
login.patch('/', (req, res) => {
    let { status } = req.body;
    msyql(`UPDATE statu SET status = ${status} WHERE id = ${0} `);
})

module.exports = login;