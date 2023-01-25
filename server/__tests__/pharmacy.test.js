
const supertest = require("supertest");
const app = require("../index");

describe("pharmacy", () => {
    it("getGardingPharmacies ", async () => {
      const res = await supertest(app).get("/api/pharmacy/gard/active")
      expect(res.statusCode).toEqual(200);
    });

    it("changePharmacyState ", async () => {
        const res = await supertest(app).get("/api/pharmacy/gard/63d0fd993cdd15fc831391f5")   .send({
            statuts: true,
          });
        expect(res.statusCode).toEqual(200);
      });

})