/**
 * Combine
 */

const updateStudentGradeByCity = (studentArray, city, newGrade) => {
  /**
     * function returns an array of students for a specific
     * city with thier new grade
     * @arrObj:
     * @city:
     * @newGrade:
     */
  const info = studentArray.map((student) => {
    const grade = newGrade.filter((studentGrade) =>
      studentGrade.studentId === student.id).map((SelectInfo) => SelectInfo.grade)[0]
    student.grade = grade || 'N/A'
    return student
  })

  return info.filter((obj) => obj.location === city)
}

export default updateStudentGradeByCity
