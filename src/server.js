import express from 'express';
import dotenv from 'dotenv';
import UserRoutes from './router/userRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/', UserRoutes);

app.get('/health', (req, res) => {
  res.send('Rota funcionando');
});

app.listen(8080, () => {
  console.log('Servidor funcionando');
});
