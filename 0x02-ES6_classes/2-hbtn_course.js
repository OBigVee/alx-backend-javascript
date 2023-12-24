/**
 * Represents a Holberton Course.
 */

export default class HolbertonCourse {
  /**
     * Creates a new @see {@link HolbertonCourse}.
     *
     * @param {String} name - The name of the course.
     * @param {Number} length - How long the course is (in months).
     * @param {String[]} students - The names of students in the course.
     */
  constructor (name, length, students) {
    this._name = this._validateString(name)
    this._length = this._validateLength(length)
    this._students = this._validateStudents(students)
  }

  /**
     * Gets the name of this course.
     */
  get name () {
    return this._name
  }

  /**
     * Sets the name of this course.
     */
  set name (newName) {
    this._name = this._validateString(newName)
  }

  /**
     * Gets the length of this course (in months).
     */
  get length () {
    return this._length
  }

  /**
     * Sets the length of this course (in months).
     */
  set length (newLen) {
    this._length = this._validateLength(newLen)
  }

  /**
     * Gets the names of students in this course.
     */
  get students () {
    return this._students
  }

  /**
     * Sets the names of students in this course.
     */
  set students (newStudent) {
    this._students = this._validateStudents(newStudent)
  }

  _validateString (val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string')
    }
    return val
  }

  _validateLength (val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a valid number')
    }
  }

  _validateStudents (val) {
    if (!Array.isArray(val) || !val.every(item => typeof item === 'string')) {
      throw new TypeError(' Students must be an array of strings')
    }
    return val
  }
}
