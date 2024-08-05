const http = require('http')
const fs = require('fs')

const port = 1245
const hostname = '127.0.0.1'
const displayResponseText1 = 'Hello Holberton School!'
const displayResponseText2 = ['This is the list of our students']
const db = process.argv.length > 2 ? process.argv[2] : ''
const failedMssg = 'Cannot load the database'

function countStudents (dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (err, body) => {
      if (err) reject(failedMssg)
      if (body) {
        const obj = {}
        const data = body.toString('utf-8').trim().split('\n')
        // get the total number of students
        const numOfStudent = data.length - 1
        console.log(`Number of students: ${numOfStudent}`)

        // get each colum name (field)
        const fieldName = data[0].split(',')

        // get the names and info of all students -> this is a list in the form [ 'firstname', 'lastname', 'age' ]
        const sNamesColumn = fieldName.slice(0, fieldName.length - 1)

        // collect each student record from the table (data)
        for (const student of data.slice(1)) {
          // each student record collected
          const sRecord = student.split(',')
          const sNameAge = sRecord.slice(0, sRecord.length - 1)
          const field = sRecord[sRecord.length - 1]
          if (!Object.keys(obj).includes(field)) {
            obj[field] = []
          }
          const studentInfo = sNamesColumn
            .map((supposedStudentName, idx) => [supposedStudentName, sNameAge[idx]])
          obj[field].push(Object.fromEntries(studentInfo))
        }
        for (const [field, nameAge] of Object.entries(obj)) {
          const studentNames = nameAge.map((student) => student.firstname).join(', ')
          console.log(`Number of students in ${field}: ${nameAge.length}. List: ${studentNames}`)
        }
        resolve(true)
      }
    })
  })
}
const serverRoutingOptions = [
  {
    urlRoute: '/',
    handler (req, res) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.setHeader('Content-Length', displayResponseText1.length)
      res.write(Buffer.from(displayResponseText1))
    }
  },
  {
    urlRoute: '/students',
    handler (req, res) {
      countStudents(db).then((resolve) => {
        const response = displayResponseText2 + resolve.toString()
        const data = response.join('\n')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Content-Length', data.length)
        res.write(Buffer.from(data))
      }).catch((err) => {
        // const dats = err instanceof Error ? displayResponseText2.push(err.message): ""
        // dats.join('\n')
        // res.statusCode = 200
        // res.setHeader('Content-Type', 'text/plain')
        // res.setHeader('Content-Length', dats.length)
        // res.write(Buffer.from(dats))
        if (err instanceof Error) {
          const data = displayResponseText2.push(err.message)// + err.message
          data.join('\n')
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/plain')
          res.setHeader('Content-Length', data.length)
          res.write(Buffer.from(data))
        } else {
          const data = err.toString()
          data.join('\n')
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/plain')
          res.setHeader('Content-Length', data.length)
          res.write(Buffer.from(data))
        }
      })
    }
  }
]
const app = http.createServer().on('request', (req, res) => {
  for (const route of serverRoutingOptions) {
    if (route.urlRoute === req.url) {
      route.handler(req, res)
      break
    }
  }
})

app.listen(port, hostname, () => {
  process.stdout.write(`... http://${hostname}:${port}/students\n`)
})

module.exports = app