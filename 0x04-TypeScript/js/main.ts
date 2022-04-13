interface Student{
    firstName:String,
    lastName:String,
    age:Number;
    location:String
}

let student1:Student = {
    firstName: "Tope",
    lastName :"Bello",
    age:18,
    location: "Lagos",
};

let student2:Student={
    firstName : "Victor",
    lastName :"Iyiola",
    age: 30,
    location: "Canada"
};
let studentList =  new Array(student1,student2);