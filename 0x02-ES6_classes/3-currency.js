/**
 * Implementation of Currency class
 */

export default class Currency {
  constructor (code, name) {
    this._code = code
    this._name = name
  }

  get code () {
    return this._code
  }

  set code (val) {
    if (typeof (val) !== 'string') {
      throw new TypeError(`${this._code} must be a valid string`)
    }
    this._code = val;
  }

  get name () {
    return this._name
  }

  set name (newName) {
    if (typeof newName !== 'string') {
      throw new TypeError(`${newName} must be a string`)
    }
    this._name = newName;
  }

  displayFullCurrency () {
    return `${this._name} (${this._code})`
  }
}
