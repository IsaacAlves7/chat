import mongoose from "mongoose";

const autoglassSchema = new mongoose.Schema({
    telefone: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ocupacao: {
        type: String,
        required: true
    },
    solicitacao: {
        type: String,
        required: true
    }
});
    
const autoglass = mongoose.model('autoglass', autoglassSchema);
export default autoglass;