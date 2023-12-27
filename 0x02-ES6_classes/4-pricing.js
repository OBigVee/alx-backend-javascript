/**
 * Pricing
 */
import Currency from './3-currency.js'

export default class Pricing {
  constructor (amount, currency) {
    if (typeof (amount) !== 'number') {
      throw TypeError('Amount must be a number')
    }
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be instance of Currency class')
    }
    this._amount = amount
    this._currency = currency
  }

  get amount () {
    return this._amount
  }

  set amount (newAmount) {
    if (typeof (newAmount) !== 'number') {
      throw new TypeError('amount must be a valid number')
    } else {
      this._amount = newAmount
    }
  }

  get currency () {
    return this._currency
  }

  set currency (nCurrency) {
    if (!(nCurrency instanceof Currency)) {
      throw TypeError('currency must be an instance of Currency class')
    }
    this._currency = nCurrency
  }

  displayFullCurrency () {
    return `${this._amount} ${this._currency._name}(${this._currency._code})`
  }

  static convertPrice (amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw TypeError('Amount must be a number')
    }
    if (typeof (conversionRate) !== 'number') {
      throw TypeError('Conversion Rate must be a number')
    }
    return (amount * conversionRate)
  }
}
