const request = require('supertest');
const app = require('../src/app');

describe('Testes da API', () => {
  test('GET / deve retornar status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('GET /api/status deve retornar JSON válido', async () => {
    const response = await request(app).get('/api/status');
    expect(response.body).toEqual({ status: 'operational', version: '1.0.0' });
  });
});
