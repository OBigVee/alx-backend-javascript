export default function getStudentsByLocation(studentArray, city) {
    return studentArray.filter((student) => student.location === city);
}