import mongoose from 'mongoose';

// Função assíncrona
const Connection = async (username, password) => { 
    const URL = `mongodb+srv://${username}:${password}@cluster0.94nsy.mongodb.net/autoglasschat?retryWrites=true&w=majority`;
    try { // Tentar e esperar por uma promise do mongoose connection with MongoDB
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(':) The Database was connected successfully!');
    } catch(error) {
        console.log(':( Error while connecting to MongoDB', error);
    }
}

export default Connection;