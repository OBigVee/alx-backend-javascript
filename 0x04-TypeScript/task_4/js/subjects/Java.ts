/// <reference path="Teacher.ts"/>
namespace Subjects{
    export interface Teacher{
        experienceTeachingJava?:number;
    }

    class Java extends Subjects.Subject{
        getRequirements():string{
            return 'Here is the list of requirements for java';
        }

        getAvailableTeacher():string{
            return this._teacher.experienceTeachingJava > 0? `Available Teacher: ${this._teacher.firstName}`:"No available teacher";
        }
    }
}