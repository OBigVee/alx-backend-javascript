/**
 * HolbertonClass
 */
export default class HolbertonClass {
  constructor (size, location) {
    if (typeof (size) !== 'number') {
      throw new TypeError('size must be a type number')
    }

    if (typeof (location) !== 'string') {
      throw new TypeError('location must be a type string')
    }

    this._size = size
    this._location = location
  }

  get size () {
    return this._size
  }

  get location () {
    return this._location
  }

  set size (value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('value must be a type number')
    }
  }

  set location (value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('value must be a type number')
    }
  }

  valueOf () {
    return this._size
  }

  toString () {
    return this._location
  }
}
