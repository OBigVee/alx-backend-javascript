export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;


    }
    get getCode() {
        return this._code;
    }
    set setCode(val) {
        if (typeof(val) !== 'string') {
            throw Error("code must be String");
        } else {
            this._code = val;
        }
    }

    get getName() {
        return this._name;
    }
    set setName(name) {

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