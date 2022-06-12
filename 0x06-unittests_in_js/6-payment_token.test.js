const getPaymentTokenFromAPI = require('./6-payment_token')
const { expect } = require('chai')

describe('getPaymentTokenFromAPI', () => {
  // success == true
  it('getPaymentTokenFromAPI(test)', (done) => {
    getPaymentTokenFromAPI(true).then((resolve) => {
      expect(resolve).to.deep.equal({ data: 'Successful response from the API' })
      done()
    })
  })
})
