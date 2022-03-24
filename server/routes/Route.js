import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { newConversation } from '../controller/conversation-controller.js';

const route = express.Router();

// Configurando a rota de autenticação
route.post('/user', addUser); // Add any user
route.get('/users', getUsers); // Get any user

route.post('/conversation/add', newConversation); // Add any conversation

export default route;