const supertest = require('supertest');
const app = require('../index');

describe('POST /api/pharmacy', () => {
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
});
