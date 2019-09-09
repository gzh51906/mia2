const express = require('express');
const user = express.Router();
const mysql = require('./content_db');

user.get('/', async (req, res) => {
    let { number } = req.query;
    number = (number - 1) * 7;
    try {
        let result = await mysql(`SELECT * FROM user LIMIT ${number}, 7`)
        let result2 = await mysql(`SELECT COUNT( username ) AS user FROM user `)
        res.send([result, result2])
    } catch (err) {
        res.send(err);
    }

})
user.delete('/', (req, res) => {
    let { username } = req.query;
    try {
        mysql(`DELETE FROM bfms.user WHERE username= '${username}'`)
    } catch (err) {
        res.send(err);
    }
});

module.exports = user;