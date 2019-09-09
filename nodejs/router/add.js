const express = require("express")
const add = express.Router()
const mysql = require("./content_db")

add.post("/", (req, res) => {
    let { data, type } = req.body
    try {
        if (type == "kind") {
            mysql(`INSERT INTO bfms.kind(id, type, name, url, title, date)VALUES
        (${data.id}, "${data.type}", "${data.name}", "${data.url}", "${data.title}", "${data.date}")`);
        }
        else {
            mysql(`INSERT INTO bfms.${type}(id, type, name, url, marketPrice, soldPrice)VALUES
        (${data.id}, "${data.type}", "${data.name}", "${data.url}", ${data.marketPrice}, ${data.soldPrice})`);
        }
        res.send("success");
    } catch (err) {
        res.send(err);
    }


})
add.patch("/", (req, res) => {
    let { data, type } = req.body;
    try {
        if (type == "kind") {
            mysql(`UPDATE bfms.kind SET type = "${data.type}", name = "${data.name}", url = "${data.url}", 
        title = "${data.title}", date = "${data.date}" WHERE id  = ${data.id}`);
        }
        else {
            mysql(`UPDATE bfms.${type} SET  type ="${data.type}", name = "${data.name}", url = "${data.url}", marketPrice = ${data.marketPrice},
         soldPrice = ${data.soldPrice} WHERE id  = ${data.id}`);
        }
        res.send("success");
    } catch (err) {
        res.send(err);
    }
})
module.exports = add