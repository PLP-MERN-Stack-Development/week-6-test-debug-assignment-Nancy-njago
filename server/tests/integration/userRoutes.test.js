const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/User');

describe('User Routes', () => {
  let testUser;

  beforeAll(async () => {
    testUser = await User.create({ 
      email: 'test@example.com', 
      password: 'password123' 
    });
  });

  it('GET /api/users/:id should return user', async () => {
    const res = await request(app)
      .get(`/api/users/${testUser._id}`)
      .expect(200);

    expect(res.body.email).toBe('test@example.com');
  });
});