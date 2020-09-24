const { query } = require('../config/mysql.js')

// 获取滑板场地list
// async function getPlaceList (req, res) {
//   // 先查出所有的场地
//   let placeListRes = await query('select * from place')
//   // 循环场地列表，根据每个场地id去图片表查出它的图片
//   for (const item of placeListRes) {
//     let imgListRes = await query(`select * from image where place_id = ${item.id}`)
//     item.imgList = imgListRes || [];
//   }
//   res.json(placeListRes)
// }

// 查询
async function getComment (req, res) {
  let { id } = req.query
  let sql = 'select * from xj_city'
  if (id) {
    sql += ` where id = ${id}`
  }
  let msg = await query(sql)
  res.json(msg)
}

module.exports = {
  getComment
}
