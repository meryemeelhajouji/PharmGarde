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




})



  