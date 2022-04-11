export default function getListStudents() {
    const fArr = []
    const obj1 = { 'id': 1, 'firstName': 'Guillaume', 'location': 'San Francisco' };
    const obj2 = { id: 2, firstName: 'James', location: 'Columbia' };
    const obj3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
    const arr = new Array(obj1, obj2, obj3);
    for (let i of arr) {
        fArr.push(i);
    }

    return fArr;
}