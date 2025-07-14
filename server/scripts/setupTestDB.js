const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

module.exports = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  process.env.TEST_DB_URI = mongoUri;

  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('error', (e) => {
    console.error('MongoDB connection error:', e);
  });

  return async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  };
};