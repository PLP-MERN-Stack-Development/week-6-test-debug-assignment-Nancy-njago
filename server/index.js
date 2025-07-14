import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong 🏓 from server' });
});

// New route to handle /api/ping/info
app.get('/api/ping/info', (req, res) => {
  const { id } = req.query;
  res.json({ message: `Info for ID ${id}` });
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}).catch(err => console.error('MongoDB connection error:', err));
