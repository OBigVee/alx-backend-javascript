/// <reference path="Teacher.ts" />
namespace Subjects{
    export interface Teacher{
       experienceTeachingC?: number,
    }

    export class Cpp extends Subject{
        getRequirements():string{
            return "Here is the list of requirements for Cpp";
        }
        
        getAvailableTeacher():string{
            return this._teacher.experienceTeachingC > 0? `Available Teacher : ${this._teacher.firstName}`:"No available teacher";
        }
    }
}