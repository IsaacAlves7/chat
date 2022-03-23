import express from 'express';
import { addUser } from '../controller/user-controller.js';

const route = express.Router();

// Configurando a rota de autenticação
route.post('/authChat', addUser)

export default route;