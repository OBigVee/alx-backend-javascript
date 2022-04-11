/**
 * eslint-disable
 * Abstract Class Building
 * @class Building
 */
export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
        if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
    }
    get getSqft() {
        return this._sqft;
    }
    set setSqft(val) {
        if (typeof(val) !== 'number') {
            return "sqft must be a number";
        } else {
            this._sqft = val;
        }
    }

}