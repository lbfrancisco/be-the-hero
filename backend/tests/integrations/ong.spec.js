const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "APAD",
      email: "contato@apad.com.br",
      whatsapp: "3598898988",
      city: "Rio Grande do Sul",
      uf: "SC",
    });

    expect(respose.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

  });
});