const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const failedMssg = "Cannot load the database"



function countStudents(dbPath) {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, "utf8", (err, body) =>{
            if (err) reject(failedMssg);
            if (body) {
                const obj = {}
                // get the total number of students
                const data = body.toString('utf-8').trim().split("\n");
                const numOfStudent = data.length - 1

                console.log(`Number of student ${numOfStudent}`)
                // get each column name (field)
                const fieldName = data[0].split(',')

                // get the names and info of students -> this is a list in the form
                // ['firstname', 'lastname', 'age']
                const sNamesColumn = fieldName.slice(0, fieldName.length - 1)
                // collect each student record from the table (data)
                for (const student of data.slice(1)){
                    // each student record collected
                    const sRecord = student.split(',')
                    const sNameAge = sRecord.slice(0, sRecord.length - 1)
                    const field = sRecord[sRecord.length - 1]
                    if (!
                        Object.keys(obj).includes(field)) {
                            obj[field] = []
                        }
                        const studentInfo = sNamesColumn.map((supposedStudentName, idx) => [supposedStudentName, sNameAge[idx]])
                        obj[field].push(Object.fromEntries(studentInfo))
                }
                for (const [field, nameAge] of Object.entries(obj)){
                    const studentNames = nameAge.map((student) => student.firstname).join(',')
                    console.log(`Number of students in ${field}: ${nameAge.length}. List ${studentNames}`)

                    
                }
                resolve(true)
            }
        });
    });
}

module.exports = countStudents;