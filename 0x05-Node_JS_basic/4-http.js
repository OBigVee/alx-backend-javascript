
const app = require('http')
const port = 1245
const hostname = '127.0.0.1'

const sever = app.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello Holberton School!')
})

sever.listen(port, hostname, () => {
  console.log('...')
})
