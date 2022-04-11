export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }
    get code() {
        return this._code;
    }
    set code(val) {
        if (typeof(val) !== 'string') {
            throw Error("code must be String");
        } else {
            this._code = val;
        }
    }

    get name() {
        return this._name;
    }
    set name(name) {

        if (typeof(name) !== 'string') {
            throw Error("name must be a string");
        } else {
            this._name = name;
        }
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}