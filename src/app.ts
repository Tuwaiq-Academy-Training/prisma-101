import express from 'express';
import contactRouter from './routes/contact.route';
import 'dotenv/config';
import { connectDB } from './config/db';
const app = express();

// Config
connectDB();

// Middleware
app.use(express.json());
app.use('/api/v1/contact', contactRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
