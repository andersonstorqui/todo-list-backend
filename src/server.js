import express from 'express';
import dotenv from 'dotenv';
import UserRoutes from './router/userRoutes.js';
import TasksRoutes from './router/taskRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.use('/', UserRoutes);
app.use('/', TasksRoutes);

app.get('/health', (req, res) => {
  res.send('Rota funcionando');
});

app.listen(8080, () => {
  console.log('Servidor funcionando');
});
