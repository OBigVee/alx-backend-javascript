import Currency from "./3-currency";
export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }
    get amount() {
        return this._amount;
    }
    set amount(val) {
        if (typeof(val) !== 'number') {
            throw Error("Amount type is not number");
        } else {
            this_.amount = val;
        }
    }
    get currency() {
        return this._currency;
    }
    set currency(val) {
        if (typeof(val) !== 'Currency') {
            throw Error("not of the type Currency");
        } else {
            this.__currency = val;
        }
    }
    displayFullPrice() {
        return `${this._amount} ${this._currency.getName} (${this._currency.getCode})`;

    }
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}