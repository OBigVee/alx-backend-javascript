export default class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }
    get getName() {
        return this._name;
    }

    set setName(val) {
        if (typeof(val) !== 'string ') {
            throw TypeError('Name must be a string');
        } else {
            this._name = val;
        }
    }

    get getLength() {
        return this._length;
    }
    set setLength(val) {
        if (typeof(val) !== 'number') {
            return ('Length must be a number');
        } else {
            this._length = val;
        }
    }
    get getStudent() {
        return this._students;
    }
    set setStudent(val) {
        if (!Array.isArray(val)) {
            throw TypeError('students must be an Array');
        }
        if (val.some((student) => typeof(student) !== 'string')) {
            throw TypeError('students must be an Array of strings');
        } else {
            this._students = val;
        }
    }
}