// src/config/db.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis de ambiente do .env

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  await sequelize.authenticate();
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
} catch (error) {
  console.error('Não foi possível conectar ao banco de dados:', error);
}

export default sequelize;
