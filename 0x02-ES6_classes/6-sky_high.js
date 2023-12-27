/**
 * Inheritance
 */

import Building from './5-building.js'

export default class SkyHighBuilding extends Building {
  constructor (sqft, floors) {
    super(sqft)
    if (typeof (floors) !== 'number' || floors <= 0) {
      throw Error('Invalid floors: floors  must be a positive number')
    }
    this._floors = floors
  }

  get floors () {
    return this._floors
  }

  set floors (nf) {
    if (typeof (nf) !== 'number') {
      throw new Error('floor must be day')
    }
    this._floors = nf
  }

  evacuationWarningMessage () {
    return `Evacuate slowly the ${this._floors} floors.`
  }
}
