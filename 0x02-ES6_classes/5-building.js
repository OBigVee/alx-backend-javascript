/**
 * Building
 */

export default class Building {
  constructor (sqft) {
    if (
      this.constructor !== Building &&
      this.evacuationWarningMessage === undefined
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage'
      )
    }

    this._sqft = sqft
  }

  get sqft () {
    return this._sqft
  }

  set sqft (val) {
    if (typeof (val) !== 'number') {
      throw TypeError('value must be a valid Number')
    }
    this._sqft = val
  }
}
