const { query } = require('../config/mysql.js')

// 删除
async function getComment (req, res) {
  const id = req.body.id || req.query.id
  const updateSql = 'DELETE FROM xj_city WHERE id = ?'
  let msg = await query(updateSql, id)
  res.json(msg)
}

module.exports = {
  getComment
}
