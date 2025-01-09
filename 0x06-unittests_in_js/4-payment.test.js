const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')
const { expect } = require('chai')

describe('wrap existing method', ()=>{
    it('it should inspect and behave diff when the sendPaymentRequestToApi which uses calculateNumber method of Utils',()=>{
        const sandbox = sinon.spy(console)
        const stub = sinon.stub(Utils,'calculateNumber')

        stub.returns(10)
        sendPaymentRequestToApi(100,20)
        expect(stub.calledWith('SUM', 100, 20)).to.be.true
        expect(stub.callCount).to.be.equal(1)
        expect(sandbox.log.calledWith('The total is: 10')).to.be.true
        expect(sandbox.log.callCount).to.be.equal(1)
        stub.restore()
        sandbox.log.restore()
    })
})

