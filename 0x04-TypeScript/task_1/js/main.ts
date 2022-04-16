// Let's build a Teacher interface
interface Teacher{
    readonly firstName:string;
    readonly lastName:string;
    fullTimeEmployee:boolean;
    yearsOdExperience?:number;
    location:string;
    [property:string]:any;
}

//  Extending the Teacher class
interface Directors extends Teacher{
    numberOfReports:number;
};
interface printTeacherFunction{
    (firstName:string,
    lastName:string):string;
}
 
// Printing teachers
export let  printTeacher:printTeacherFunction=(firstName,lastName):string =>{
return `${firstName[0]}.${lastName}`;
}


// Student Class interface
interface StudentClassInterface{
    firstName:string;
    lastName:string;
}

/**
 * * THE INSTRUCTION:
 * * The constructor of the class
 * * should be described through an Interface
 * 
 * * Student Class interface: StudentClassInterface*
 */

// studentClass constructor
interface StudentClassConstruct{
   new (firstName:string,
    lastName:string):StudentClassInterface;
}

/**
 * Student Class
 * 
 * *THE INSTRUCTION:
 * 
 * *The class should be described through an Interface
 * Student Class : StudentClass->StudentClassInterface
 */

class StudentClass implements StudentClassInterface{
    // attributes
    firstName:string;
    lastName:string;

    // studentClass constructor
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
   
    // method 
    workOnHomeWork():string{
        return "Currently working";
    }

    // method 
    displayName():string{
        return `${this.firstName}`;
    }
}


const teacher2:Teacher={
    firstName: 'Daniel',
    lastName: 'Joe',
    fullTimeEmployee: false,
    location: 'Italy',
    contract: false,
};
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  console.log(teacher3);

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

  