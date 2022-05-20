const app = require('../../server.js');

const supertest = require('supertest');

const request = supertest(app);

describe('/todos endpoint test', () => {
    it('should return a response', async () => {
        const response = await request.get('/todos');
        expect(response.status).toBe(200);
    });
});