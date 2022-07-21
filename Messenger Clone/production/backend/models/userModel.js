// Any user for authentication in the chat Model
const {model,Schema, default: mongoose} = require('mongoose');

const registerSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'registeruser'
    }
},{timestamps : true});

module.exports = model('user',registerSchema);