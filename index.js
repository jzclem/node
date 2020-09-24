const express = require('express')
const app = express()
const mysql = require('mysql')
const config = require('./config/mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const conn = mysql.createConnection(config)

conn.connect()

// 下面是解决跨域请求问题
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.post('/', function (err, res) {
  const sql = 'select * from xj_helpcenter_classify'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message)
      return
    }
    res.json(result)
  })
})

//查询
app.post('/address', (req, res) => {
  const id = req.body.id || req.query.id;
  const sqlStr = "select * from xj_city " + (id ? "where id = ?" : "");
  conn.query(sqlStr, id, (err, results) => {
    if (err) {
      return res.json({
        code: 1,
        message: '无地址'
      })
    }
    res.json({
      code: 200,
      message: results
    })
  })
})

//增加
app.post('/addAddress', (req,res) => {
  const user = req.body
  const addSql = 'INSERT INTO xj_city SET ?'
  conn.query(addSql,user,(err,results) => {
    if (err) {
      return res.json({
        code: 1,
        message: '添加失败'
      })
    }
    res.json ({
      code: 200,
      message: '添加成功'
    })
  })
})

//修改
app.post('/updateAddress',(req,res) => {
  const user = []
  user[0] = req.body.name
  user[1] = req.body.id
  const updateSql = 'UPDATE xj_city SET name = ? WHERE id = ?'
  conn.query(updateSql,user,(err,results) => {
    if (err) {
      return res.json({
        code: 1,
        message: '修改失败'
      })
    }
    res.json ({
      code: 200,
      message: '修改成功'
    })
  })
})

//删除
app.post('/deleteAddress',(req,res) => {
  const id = req.body.id || req.query.id;
  const updateSql = 'DELETE FROM xj_city WHERE id = ?'
  conn.query(updateSql,id,(err,results) => {
    if (err) {
      return res.json({
        code: 1,
        message: '删除失败'
      })
    }
    res.json ({
      code: 200,
      message: '删除成功'
    })
  })
})

const server = app.listen(3000, '127.0.0.1', function () {
  const host = server.address().address
  const port = server.address().port
  console.log('地址为 http://%s:%s', host, port)
})
