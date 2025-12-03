const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  test('Debe responder Hola Mundo desde Proyecto Final DevOps!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hola Mundo desde Proyecto Final DevOps!');
  });
});
