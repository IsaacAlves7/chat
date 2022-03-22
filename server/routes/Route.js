import express from 'express';
import { response } from 'express';

const route = express.Route();

// Configurando a rota de autenticação
route.post('/authChat', (req, res) => {
    response.send('Enviou a resposta!')
})

export default route;