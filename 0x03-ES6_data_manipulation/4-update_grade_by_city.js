// Create a function updateStudentGradeByCity that 
// returns an array of students for a specific city with their new grade
// It should accept a list of students (from getListStudents), 
// a city(String), and newGrades(Array of“ grade” objects) 
// as parameters.
// newGrades is an array of objects with this format:

//     {
//         studentId: 31,
//         grade: 78,
//     }

export default function updateStudentGradeByCity(studentArray, city, newGrade) {
    const info = studentArray.map((student) => {
        const grade = newGrade.filter((studentGrade) => studentGrade.studentId ===
            student.id).map((selectInfo) => selectInfo.grade)[0];
        student['grade'] = grade || 'N/A';
        return student;
    });
    return info.filter((obj) => obj.location === city);
}