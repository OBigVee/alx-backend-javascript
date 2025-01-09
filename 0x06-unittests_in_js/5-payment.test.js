const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')
const { expect } = require('chai')

describe('wrap existing method', ()=>{
    let sandbox
    beforeEach(()=>{
        if(!sandbox) sandbox = sinon.spy(console)
    })
    afterEach(()=>{
        sandbox.log.resetHistory()
    })
    it('it should inspect and sendPaymentRequestToAPI with 100, and 20',()=>{
        sendPaymentRequestToApi(100,20)
        expect(sandbox.log.calledWith('The total is: 120')).to.be.true
        expect(sandbox.log.calledOnce).to.be.true
    })

    it('it should inspect and sendPaymentRequestToAPI with 10, and 10',()=>{
        sendPaymentRequestToApi(10, 10)
        expect(sandbox.log.calledWith('The total is: 20')).to.be.true
        expect(sandbox.log.calledOnce).to.be.true
    })
})



