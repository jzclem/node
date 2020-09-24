const { query } = require('../config/mysql.js')

// 修改
async function getComment (req, res) {
  const user = []
  user[0] = req.body.name
  user[1] = req.body.id
  const updateSql = 'UPDATE xj_city SET name = ? WHERE id = ?'
  let msg = await query(updateSql, user)
  res.json(msg)
}

module.exports = {
  getComment
}
