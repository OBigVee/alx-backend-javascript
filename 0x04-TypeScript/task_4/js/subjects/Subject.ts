/// <reference path="Teacher.ts" />

namespace Subjects{
    export class Subject{
        _teacher:Subjects.Teacher;
        
        get getTeacher(){
            return this._teacher;
        }

        set setTeacher(teacher:Subjects.Teacher){
            this._teacher = teacher;
        }
    }
}