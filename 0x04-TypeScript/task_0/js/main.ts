interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

let student1:Student ={
    firstName:"Victor",
    lastName:"Ade",
    age:20,
    location:"Ebonyi"
} 

let student2:Student ={
    firstName:"Tobi",
    lastName:"Ade",
    age:20,
    location:"Ebonyi"
} 

let StudentsList:Student[] = new Array(student1, student2);

// create a table

// let tbody = document.querySelector("#student-table tbody");

let table = document.createElement('student-table');
document.body.appendChild(table);

/**
 * iterate over all the strings in the studentList array and append 
 * the header cells to the table header row
 */

StudentsList.map((studentInfo: Student) =>{
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    // create td element
    let name = document.createElement('td');
    // set property 
    name.innerHTML = studentInfo.firstName;
    // render name 
    tableRow.appendChild(name);

    //create td element
    let location = document.createElement('td');
    // set property
    location.innerHTML = studentInfo.location;
    //render location
    tableRow.appendChild(location);

    return tableRow;
})