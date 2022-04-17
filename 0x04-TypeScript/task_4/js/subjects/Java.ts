/// <reference path="Teacher.ts" />

namespace Subjects{
    export interface Teacher{
        experienceTeachingJava?:number;
    }
    export class Java extends Subjects.Subject{
        getRequirements():string{
            return "Here is the list of requirements for Java";
        }
        
        getAvailableTeacher():string{
            return this._teacher.experienceTeachingJava > 0? `Available Teacher: ${this._teacher.firstName}`: "No available teacher";
        }
    }
}