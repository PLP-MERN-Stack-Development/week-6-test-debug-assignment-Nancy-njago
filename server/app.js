const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

const request = require('supertest');
const app = require('../src/app'); // adjust path to your Express app

describe('GET /api/health', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
  });
});


module.exports = app;