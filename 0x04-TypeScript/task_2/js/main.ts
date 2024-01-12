interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [property:string]:any;
}

// Extending the Teacher class
interface Directors extends Teacher{
    numberOfReports:number;
}


interface printTeacherFunction{
    (firstName:string, lastName:string):string;
}
export let printTeacher:printTeacherFunction = (firstName, lastName):string=>{
    return `${firstName[0]}. ${lastName}`
}

// student class interface
interface StudentClassInterface{
    firstName:string;
    lastName:string;
}

interface StudentClassConstruct{
    new (firstName:string, lastName: string): StudentClassInterface;
}

class StudentClass{
    firstName:string;
    lastName:string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork():string{
        return "Currently Working";
    }

    displayName():string{
        return `${this.firstName}`;
    }
}
interface DirectorInterface{
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
}

interface TeacherInterface{
     workFromHome():string;
     getCoffeeBreak():string;
     workTeacherTasks():string;
}

class Director implements DirectorInterface{
    constructor(){

    }

    workFromHome(): string {
        return "Working from home";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

    getCoffeeBreak(): string {
        return "Getting a coffe break";
    }
    // getToWork():string{
    //     return "Getting a coffe break";
    // }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot Work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee (salary: number | string): Director | Teacher{
    if ( typeof salary === "number" && salary < 500){
        return new Teacher();
    }else{
        return new Director();

    }
function isDirector(employee:Director | Teacher){
    if (employee instanceof Director){
        return true;
    }else{
        return false;
    }
}

function executeWork(employee:Director | Teacher):string{
    if (employee instanceof Director){
        return (employee as Director).workDirectorTasks();
    }else{
       (employee as Teacher).workTeacherTasks();
    }
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects){
    if(todayClass === "Math" ){
        return "Teaching Math";
    }else{
        return "Teaching History"
    }
}
