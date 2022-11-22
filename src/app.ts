import express from 'express';
import contactRouter from './routes/contact.route';
import 'dotenv/config';
const app = express();

app.use(express.json());
app.use('/api/v1/contact', contactRouter);

const api_key = process.env.API_KEY;

console.log(api_key);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
