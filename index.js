const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./api/index')
const http = require('http')
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

server.listen(3000, '127.0.0.1', function () {
  const host = server.address().address
  const port = server.address().port
  console.log('地址为 http://%s:%s', host, port)
})
