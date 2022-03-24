import axios from 'axios'; // Consumindo a API do Cliente para o Servidor (Ponte)

const URL = 'http://localhost:9000'; // Endereço da Aplicação Back-End

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/user`, data) // Método POST para localhost na porta 9000
    } catch (error) { // Tentar axios post até a condição for verdadeira, se der erro = exibir o erro
        console.log('Error while calling addUser API', error);
    }
}

export const getUsers = async () => {
    try{
        let response = await axios.get(`${URL}/users`) // Método POST para localhost na porta 9000
        return response.data;
    } catch (error) { // Tentar axios post até a condição for verdadeira, se der erro = exibir o erro
        console.log('Error while calling addUser API', error);
    }
}

export const setConversation = async (data) => {
    try{
        await axios.post(`${URL}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API', error);
    }
}