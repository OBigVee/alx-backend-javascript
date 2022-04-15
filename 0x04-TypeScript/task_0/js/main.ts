interface Student {
    firstName: string,
    lastName: string,
    age: number;
    location: string
}

let student1: Student = {
    firstName: "Tope",
    lastName: "Bello",
    age: 18,
    location: "Lagos",
};

let student2: Student = {
    firstName: "Victor",
    lastName: "Iyiola",
    age: 30,
    location: "Canada"
};

let studentList: Student[] = new Array(student1, student2);

// Create a table 
let table = document.createElement('table');
document.body.appendChild(table);

/**
 *  iterate over all the strings in the studentList array and append 
 * the header cells to the table header row
 */

studentList.map((studentInfo: Student) => {
    // create table row
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    // create td element
    let name = document.createElement('td');
    // set the property to name
    name.innerHTML = studentInfo.firstName;
    // render name
    tableRow.appendChild(name);

    // create td element
    let location = document.createElement('td');
    // set the property to location
    location.innerHTML = studentInfo.location;
    // render location
    tableRow.appendChild(location);

    return tableRow;
});