/// <reference path="Teacher.ts" />
namespace Subjects{
    export interface Teacher{
        experienceTeachingReact?: number;
    }


    export class React extends Subjects.Subject{
        getRequirements():string{
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher():string{
            return this._teacher.experienceTeachingReact > 0? `Available Teacher: ${this._teacher.firstName}`: "No available teacher";
        }
    }
}