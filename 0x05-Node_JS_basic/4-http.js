const http = require('http')



const port = 1245
const hostname = '127.0.0.1'
const displayText = "Hello Holberton School!"
const path = " "
const method = "GET";


const app = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Length', displayText.length);
    res.write(Buffer.from(displayText));
})

app.listen(port, hostname, () => {
    console.log("...")
})

module.exports = app