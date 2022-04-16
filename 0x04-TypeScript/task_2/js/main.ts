interface DirectorInterface{
    workFromHome():string,
    getCoffeeBreak():string,
    workDirectorTasks():string,
}

interface TeacherInterface{
    workFromHome():string,
    getCoffeeBreak():string,
    workTeacherTasks():string,
}

class Director implements DirectorInterface{
    workDirectorTasks(): string {
        return"Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workFromHome(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface{
    workTeacherTasks(): string {
        return"Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workFromHome(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string):Director | Teacher{
    if(typeof(salary)==='number' && salary < 500){
        return new Teacher();
    }else{
        return new Director();
    }
}

function isDirector(employee: Director | Teacher){
    if (employee instanceof Director){
        return true;
    }else{
        return false;
    }
}

function executeWork(employee: Director | Teacher): string{
    if (employee instanceof Director){
        return (employee as Director).workDirectorTasks();
    }else{
        (employee as Teacher).workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects):string{
    if(todayClass=== "Math"){
        return "Teaching Math";
    }else{
        return "Teaching History";
    }
}
console.log(teachClass("Math"));
console.log(teachClass("History"));