import express from 'express';
import { response } from 'express';

const route = express.Route();

route.post('/authChat', (req, res) => {
    response.send('Enviou a resposta!')
})

export default route;