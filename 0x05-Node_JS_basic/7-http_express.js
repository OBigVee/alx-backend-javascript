const express = require('express')
const fs = require('fs')

const app = express()
const port = 1245
const db = process.argv.length > 2 ? process.argv[2] : ''
const displayResponseText1 = 'Hello Holberton School!'
const displayResponseText2 = ['This is the list of our students']

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

        // get the names and info of all students -> this is a list in the form
        // [ 'firstname', 'lastname', 'age' ]
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

app.get('/', (req, res) => {
  res.send(`${displayResponseText1}`)
})
app.get('/students', (req, res) => {
  countStudents(db).then((resolve) => {
    displayResponseText2.push(resolve)
    const data = displayResponseText2.join('\n')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Length', data.length)
    res.write(Buffer.from(data))
  }).catch((err) => {
    const data = (err instanceof Error) ? displayResponseText2.push(err.message) : ''
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Length', data.length)
    res.write(Buffer.from(data))
  })
})

app.listen(port, () => {
  console.log("....")
})

module.exports = app