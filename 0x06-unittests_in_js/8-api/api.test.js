const { expect } = require('chai')
const request = require('request')
// const sinon = require('sinon')
// const app = require('./api')


describe('Index page',()=>{
    const PORT = 7865
    it('should have correct status code and body message',  (done) => {
        request.get(`http://localhost:${PORT}/`,(err, res, body)=>{
            expect(res.statusCode).to.be.equal(200)
            expect(body).to.be.equal('Welcome to the payment system')
            done()
        })
    })


    // it('should ouput log to the console', function () {
    //     const sandbox = sinon.spy(console)
    //     app()
    //     expect(sandbox.log.calledWith('The total is: 10')).to.be.true
    //     expect(sandbox.log.callCount).to.be.equal(1)
    //     sandbox.restore()
    // });
})