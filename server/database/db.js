import mongoose from 'mongoose';

const Connection = async () => { // Função assíncrona
    const URL = 'mongodb+srv://isaac:i770@cluster0.94nsy.mongodb.net/autoglasschat?retryWrites=true&w=majority';
    try { // Tentar e esperar por uma promise do mongoose connection with MongoDB
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(':) The Database was connected successfully!');
    } catch(error) {
        console.log(':( Error while connecting to MongoDB', error);
    }
}

export default Connection;