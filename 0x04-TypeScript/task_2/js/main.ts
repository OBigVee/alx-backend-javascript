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

export class Director implements DirectorInterface{
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

export class Teacher implements TeacherInterface{
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

export function createEmployee (salary: number | string): Director | Teacher{
    if ( typeof salary === "number" && salary < 500){
        return new Teacher();
    }else{
        return new Director();

    }
}

export function isDirector(employee:Director | Teacher){
    if (employee instanceof Director){
        return true;
    }else{
        return false;
    }
}

export function executeWork(employee:Director | Teacher):string{
    if (employee instanceof Director){
        return (employee as Director).workDirectorTasks();
    }else{
       (employee as Teacher).workTeacherTasks();
    }
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";

export function teachClass(todayClass:Subjects){
    if(todayClass === "Math" ){
        return "Teaching Math";
    }else{
        return "Teaching History"
    }
}