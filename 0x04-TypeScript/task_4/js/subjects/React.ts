/// <reference path="Teacher.ts" />
namespace Subjects{
    export interface Teacher{
            experienceTeachingReact?:number;
        }

    export class React extends Subject {
        getRequirements():string{
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher():string{
            return this._teacher.experienceTeachingReact > 0? `Availabe Teacher: ${this._teacher.firstName}`:"No available teacher";
        }
    }
}
