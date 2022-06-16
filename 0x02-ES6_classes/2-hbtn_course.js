export default class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this._length = length;
        this._students = students;
    }
    get name() {
        return this._name;
    }

    set name(val) {
        if (typeof(val) !== 'string ') {
            throw new TypeError('Name must be a string');
        } else {
            this._name = val;
        }
    }

    get length() {
        return this._length;
    }
    set length(val) {
        if (typeof(val) !== 'number') {
            throw new TypeError('Length must be a number');
        } else {
            this._length = val;
        }
    }
    get students() {
        return this._students;
    }
    set students(val) {
        if (!Array.isArray(val)) {
            throw new TypeError('students must be an Array of strings');
        }
        if (val.some((student) => typeof(student) !== 'string')) {
            throw TypeError('students must be an Array of strings');
        } else {
            this._students = val;
        }
    }
}