const mysql = require('mysql')
const conn = mysql.createPool({
  'host': 'localhost',
  'port': '3306',
  'user': 'root',
  'password': '123456',
  'database': 'xj'
})

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    conn.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, results) => {
          if (err) {
            reject({
              code: 1,
              message: err
            })
          } else {
            resolve({
              code: 200,
              message: results
            })
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }
