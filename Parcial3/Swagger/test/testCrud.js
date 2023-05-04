const chai = require('chai')
const chaihttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaihttp)

const url = 'http://localhost:8082'

describe('Recuperar los empleados',()=>{
    it('Deberia traerme los empleados de la bd',(done)=>{
        chai.request(url)
        .get('/empleados/')
        .end((err,res)=>{
            expect(res).to.have.status(200)
            expect(res.text).to.be.a('string')
            done()
        })
    })
})