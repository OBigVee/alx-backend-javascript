/**
 * **INSTRUCTIONS:**
 *
 * Using the **'database database.csv'** (provided in project description),
 * create a function countStudents in the file 2-read_file.js
 *
 * * Create a function named countStudents. It should accept a path in argument
 * * The script should attempt to read the database file synchronously
 * * If the database is not available, it should throw an error with the
 * text Cannot load the database
 * * If the database is available, it should log the following message to
 * the console Number of students: NUMBER_OF_STUDENTS
 * * It should log the number of students in each field, and the list
 * with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * * CSV file can contain empty lines (at the end) - and they are not a valid student!
 *
 *  --------------------------- FUNCTION --------------------------------------
 *  function countStudents: counts the students in a CSV data file.
 *  * @param {String} dbPath database(CSV) file path.
 *  * @author Obigvee <https://github.com/Obigvee>
 */

const fs = require('fs');

function countStudents (dbPath) {
  const obj = {};
  // check is file exists
  if (!fs.existsSync(dbPath, 'utf-8')) {
    throw new Error('Cannot load the database');
  }
  // read file
  const data = fs.readFileSync(dbPath, 'utf-8').toString('utf-8').trim().split('\n');
  // console.log(`The raw data ${data1}\n`)

  // const data2 = data1.toString('utf-8')
  // console.log(`The raw data toString ${data2}\n`)

  // const data3 = data2.trim()
  // console.log(`trimmed data${data3}\n`)

  // const data4 = data3.split('\n')
  // console.log(`splited data ${data4}\n`)

  // get the total number of students
  const nOfStudents = data.length - 1;
  console.log(`Number of students: ${nOfStudents}`);

  // get each column name(field)
  const fieldName = data[0].split(',');

  // get the names and info of all students -> this is a list in the form [`firstname`, `lastname`, `age`]

  const sNamesColumn = fieldName.slice(0, fieldName.length - 1);

  // collect each student record from the table (data)

  for (const student of data.slice(1)) {
    // each student record collected
    const sRecord = student.split(',');
    const sNameAge = sRecord.slice(0, sRecord.length - 1);
    const field = sRecord[sRecord.length - 1];

    if (!Object.keys(obj).includes(field)) {
      obj[field] = [];
    }
    const studentInfo = sNamesColumn.map((supposedStudentName, idx) => [supposedStudentName, sNameAge[idx]]);
    obj[field].push(Object.fromEntries(studentInfo))
  }

  for (const [field, nameAge] of Object.entries(obj)) {
    const studentNames = nameAge.map((student) => student.firstname).join(',');
    console.log(`Number of students in ${field}: ${nameAge.length}. List: ${studetNames}`);
  }
}

module.exports = countStudents