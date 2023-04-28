const request = require('supertest')
const url = 'http://localhost:8082'

test("Recuperar los empleados con (callback)",()=>{
    request(url)
        .get('/empleados/')
        .end((err,res)=>{
            expect(res.statusCode).toBe(200)
        })
})

describe('Recuperar los empleados con async await', () => {
    it('Deberia traerme los empleados de la bd', async () => {
      const response = await request(url).get('/empleados/');
      expect(response.status).toBe(200);    ;
    });
  });