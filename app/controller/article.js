const fs = require('fs')
const dao = require('../db/dao')
var checkUser = require('../utils/checkUser')
exports.create = async (req, res) => {
    if (await checkUser(req, res)){
        console.log(123456789,await checkUser(req, res))
        let body = req.body
        await dao.create('article', {
            title: body.title,
            content: body.content,
        })
        res.json({
            data: body
        })
    }
}

exports.index = async (req, res) => {
    let list = await dao.get('article')
    res.json({
        data: list,
        total: list.length
    })
}

exports.update = async (req, res) => {
    if (await checkUser(req, res)){
        let ret = await dao.update('article', req.params.id, { title: req.body.title, content: req.body.content })
        console.log(ret)
        res.json({
            data: ret
        })
    }
}
exports.remove = async (req, res) => {
    if (await checkUser(req, res)){
        let id = req.params.id
        await dao.delete('article', id)
        res.json({
            data: id
        })
    }
}
