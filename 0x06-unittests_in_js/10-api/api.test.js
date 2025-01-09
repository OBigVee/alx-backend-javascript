const { expect } = require('chai')
const request = require('request')

describe('Index page',()=>{
    const PORT = 7865
    it('should have correct status code and body message',  (done) => {
        request.get(`http://localhost:${PORT}/`,(err, res, body)=>{
            expect(res.statusCode).to.be.equal(200)
            expect(body).to.be.equal('Welcome to the payment system')
            done()
        })
    })

    it('should have correct status code when :id is a +ve number',  (done)=> {
        request.get(`http://localhost:${PORT}/cart/12` ,(err, res, body)=>{
            expect(res.statusCode).to.be.equal(200)
            expect(body).to.be.equal(`Payment methods for cart 12`)
            done()
        })
    })

    it('should have correct status code when :id is a -ve number',  (done)=> {
        request.get(`http://localhost:${PORT}/cart/-12` ,(err, res, body)=>{
            expect(res.statusCode).to.be.equal(404)
            done()
        })
    })

    it('should have correct status code when :id is not a number',  (done)=> {
        request.get(`http://localhost:${PORT}/cart/d200-44a5-9de6` ,(err, res, body)=>{
            expect(res.statusCode).to.be.equal(404)
            done()
        })
    })

    it('should have',  (done)=> {
        request.post(`http://localhost:${PORT}/login`, {json: {userName:'Tope'}}, (err,res,body)=>{
            expect(body).to.be.equal('Welcome: Tope')
            done()
        })
    })

    it('should result in json response { payment_methods: { credit_cards: true, paypal: false } } ',  (done) =>{
        request.get(`http://localhost:${PORT}/available_payments`,(err, res, body)=>{
            expect(JSON.parse(body)).to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } })
            done()
        })
    });
})