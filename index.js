const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./api/index')
const http = require('http')
const server = http.createServer(app)

// 自定义跨域中间件
const allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};

app.use(allowCors);//使用跨域中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

server.listen(3000, '127.0.0.1', function () {
  const host = server.address().address
  const port = server.address().port
  console.log('地址为 http://%s:%s', host, port)
})
