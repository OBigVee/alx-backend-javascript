/**
 * **INSTRUCTIONS:**
 *
 * Using the **'database database.csv'** (provided in project description), create a function countStudents in the file 2-read_file.js
 *
 * * Create a function named countStudents. It should accept a path in argument
 * * The script should attempt to read the database file synchronously
 * * If the database is not available, it should throw an error with the text Cannot load the database
 * * If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
 * * It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * * CSV file can contain empty lines (at the end) - and they are not a valid student!
 *
 * -------------------------------------------------------
 * function countStudents: counts the students in a CSV data file.
 *  * @param {String} dbPath The path to the CSV data file.
 *  * @author Obigvee <https://github.com/Obigvee>
 */


const fs = require('fs')
// enum department_CS = "CSC";
// enum department_SWE = "SWE;

function countStudents (dbPath) {
  const obj = {}
  if (!fs.existsSync(dbPath, 'utf-8')) {
    throw new Error('Cannot load the database')
  }
  const data = fs.readFileSync(dbPath,"utf-8")
    .toString().trim().split('\n')
  const nOfStudent = data.length - 1
  console.log(`Number of students: ${nOfStudent}`)
  // console.log(data);
  // console.log(`Data = [${data[1]}]`);

  // get each colum name (field)
  const fieldName = data[0].split(',')

  // get the names and info of all students
  const sNames = fieldName.slice(0, fieldName.length-1)

  // collect each student record from the table (data)
  for (const student of data.slice(1)) {
    // each student record collected
    const sRecord = student.split(',')
    const sNameAge = sRecord.slice(0, sRecord.length - 1)
    const field = sRecord[sRecord.length - 1]
    if (!Object.keys(obj).includes((field))) {
      obj[field] = []
    }
    const studentInfo = sNameAge.map((supposedStudentName, idx) => [supposedStudentName, sRecord[idx]]);
    obj[field].push(Object.fromEntries(studentInfo));
  }

  for (const [field, group] of Object.entries(obj)) {
    const studentNames = group.map((student) => student['firstname']).join(',');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
}

module.exports = countStudents;

// const dat = [
//   'firstname,lastname,age,field',
//   'Johann,Kerbrou,30,CS',
//   'Guillaume,Salou,30,SWE',
//   'Arielle,Salou,20,CS',
//   'Jonathan,Benou,30,CS',
//   'Emmanuel,Turlou,40,CS',
//   'Guillaume,Plessous,35,CS',
//   'Joseph,Crisou,34,SWE',
//   'Paul,Schneider,60,SWE',
//   'Tommy,Schoul,32,SWE',
//   'Katie,Shirou,21,CS'
// ];
