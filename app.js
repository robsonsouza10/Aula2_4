/*Imports */
import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

import { studentRouter } from './routes/studentRoutes.js';

const app = express();

/*Conexao com o MongoDB atraves do mongoose*/
(async () => {
  try {
    process.env.USERDB;
    await mongoose.connect(
      'mongodb+srv://' +
        process.env.USERDB +
        ':' +
        process.env.PWDDB +
        '@bootcamp-smurc.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

app.use(express.json());
app.use(studentRouter);
/*servidor iniciado*/
app.listen(3000, () => console.log('Servidor em execucao na porta: 3000'));
