const fs = require('fs')

let writeFile = (tbName, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(`app/db/${tbName}.json`, JSON.stringify(data), 'utf8', (err) => {
            if (err) {
                console.error(err)
                rej(err)
            } else {
                res(data)
            }
        })
    })
}

let readFile = (tbName) => {
    return new Promise((res, rej) => {
        fs.readFile(`app/db/${tbName}.json`, (err, file) => {
            if (err) {
                console.error(err)
                rej(err)
            } else {
                let result = file.toString()
                res(JSON.parse(result))
            }
        })
    })
}
exports.create = async (tbName, data) => {
    // let tb = require(`./${tbName}.json`)
    let tb = await readFile(tbName)
    let len = tb.len
    data.id = len
    tb.data[len] = data
    tb.len++
    return await writeFile(tbName, tb)
}

exports.delete = async (tbName, id) => {
    // let tb = require(`./${tbName}.json`)
    let tb = await readFile(tbName)
    if (tb.data[id]) {
        delete tb.data[id]
    }
    return await writeFile(tbName, tb)
}

exports.get = async (tbName) => {
    // let tb = require(`./${tbName}.json`)
    let tb = await readFile(tbName)
    let list = []
    for (let key in tb.data) {
        list.push(tb.data[key])
    }
    return list
}

exports.findById = async (tbName, id) => {
    let tb = await readFile(tbName)
    return tb.data[id]
}

exports.update = async (tbName, id, data) => {
    // let tb = require(`./${tbName}.json`)
    let tb = await readFile(tbName)
    data.id = parseInt(id)
    tb.data[id] = data

    return await writeFile(tbName, tb)
}