var student1 = {
    firstName: "Tope",
    lastName: "Bello",
    age: 18,
    location: "Lagos"
};
var student2 = {
    firstName: "Victor",
    lastName: "Iyiola",
    age: 30,
    location: "Canada"
};
var studentList = new Array(student1, student2);
// Create a table 
var table = document.createElement('table');
document.body.appendChild(table);
/**
 *  iterate over all the strings in the studentList array and append
 * the header cells to the table header row
 */
studentList.map(function (studentInfo) {
    // create table row
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    // create td element
    var name = document.createElement('td');
    // set the property to name
    name.innerHTML = studentInfo.firstName;
    // render name
    tableRow.appendChild(name);
    // create td element
    var location = document.createElement('td');
    // set the property to location
    location.innerHTML = studentInfo.location;
    // render location
    tableRow.appendChild(location);
    return tableRow;
});
