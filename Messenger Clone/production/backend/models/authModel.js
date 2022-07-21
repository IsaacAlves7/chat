// Any user for authentication in the chat Model
const {model,Schema, default: mongoose} = require('mongoose');

const registerSchema = new Schema ({
    userName : {
        type : String,
        required : true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'registeruser'
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true,
        select : false
    },
    image : {
        type: String,
        required : true
    }
},{timestamps : true});

module.exports = model('user',registerSchema);