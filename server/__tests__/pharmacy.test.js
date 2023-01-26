const supertest = require("supertest");
const app = require("../index");
describe("Pharmacy", () => {

    it("removePharmacy", async () => {
        const res = await supertest(app).delete("api/pharmacy/63d106bd36dbba0a5cf2621a").send({
           
        });
        expect(res.statusCode).toEqual(200);
      });


      it('should respond status Get all Pharmacy', async () => {
        const res = await request(app).get('/api/pharmacy/').send({
        });
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ message: 'pharmacy is fonded' })
    });


it('should respond status  400 Get all Pharmacy', async () => {
        const res = await request(app).get('/api/pharmacy/').send({
        });
        expect(res.statusCode).toBe(400)
        expect(res.body).toEqual({ message: 'pharmacy is not fonded' })
    });


    it('should respond status  200 Get One Pharmacy', async () => {
      const res = await request(app).get('/api/pharmacy/63d106bd36dbba0a5cf2621a').send({
      });
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual({ message: 'pharmacy is not fonded' })
  });


  it('getGardingPharmacies ', async () => {
    const res = await supertest(app).get('/api/pharmacy/gard/active');
    expect(res.statusCode).toEqual(200);
  });

  it('changePharmacyState ', async () => {
    const res = await supertest(app).get('/api/pharmacy/gard/63d0fd993cdd15fc831391f5').send({
      statuts: true,
    });
    expect(res.statusCode).toEqual(200);
  });

  it('should create a new pharmacy', async () => {
    const response = await supertest(app)
        .post('/api/pharmacy')
        .send({
            name: 'Test Pharmacy',
            address: '123 Main St',
            phone: '555-555-5555',
            email: 'testpharmacy@example.com',
        });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        pharmacy: expect.objectContaining({
            name: 'Test Pharmacy',
            address: '123 Main St',
            phone: '555-555-5555',
            email: 'testpharmacy@example.com',
        })
    });
});

it('should return an error if no data is provided', async () => {
    const response = await supertest(app)
        .post('/api/pharmacy')
        .send({});

    expect(response.statusCode).toBe(400);
});

})



  
