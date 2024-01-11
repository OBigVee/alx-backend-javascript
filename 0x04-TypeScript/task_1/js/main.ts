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

