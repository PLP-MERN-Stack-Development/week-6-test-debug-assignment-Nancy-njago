const { authenticate } = require('../../src/middleware/auth');

describe('Authentication Middleware', () => {
  it('should reject requests without token', () => {
    const req = { headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    authenticate(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
  });
});