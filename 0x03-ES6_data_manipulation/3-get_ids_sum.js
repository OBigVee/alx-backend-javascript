export default function getStudentIdsSum(studentArray) {
    const initialValue = 0;
    return studentArray.reduce((previousValue, currentValue) => currentValue.id + previousValue, initialValue);

}