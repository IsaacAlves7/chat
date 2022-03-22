import mongoose from 'mongoose';

const Connection = () => {
    const URL = 'mongodb+srv://isaac:isaac@cluster0.94nsy.mongodb.net/autoglassdb?retryWrites=true&w=majority';
    mongoose.connect(URL, {})
}

export default Connection;