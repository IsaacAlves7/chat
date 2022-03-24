import mongoose from 'mongoose';

// Função assíncrona
const Connection = async (username, password) => { 
    // <username>:<password><databasename>
    const URL = `mongodb+srv://${username}:${password}@cluster0.94nsy.mongodb.net/autoglasschat?retryWrites=true&w=majority`;
    try { // Tentar e esperar por uma promise do mongoose connection with MongoDB
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("\x1b[32m", ':) The Database was connected successfully!'); // green text = ok
    } catch(error) {
        console.log("\x1b[31m", ':( Error while connecting to MongoDB', error); // red text = error
    }
}

export default Connection;