const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')
//const assert = require('chai').assert
const { expect } = require('chai')

describe('wrap existing method', ()=>{
    it('should inspect the sendPaymentRequestToApi which uses calculateNumber method of Utils',()=>{
        const sandbox = sinon.spy(Utils)
        sendPaymentRequestToApi(100,20)
        expect(sandbox.calculateNumber.calledWith('SUM', 100, 20)).to.be.true
        expect(sandbox.calculateNumber.callCount).to.be.equal(1)
        sandbox.calculateNumber.restore()
    })
})

