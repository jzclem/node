const { query } = require('../config/mysql.js')

// 增加
async function getComment (req, res) {
  const user = req.body
  const addSql = 'INSERT INTO xj_city SET ?'
  let msg = await query(addSql, user)
  res.json(msg)
}

module.exports = {
  getComment
}
