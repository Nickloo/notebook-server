const fs = require('fs')
const path = require('path')
exports.index = async (req,res) =>{
  const tpl = path.join('public/dist','index.html')
  let html = await fs.readFileSync(tpl,'utf-8')
  res.send(html)
}