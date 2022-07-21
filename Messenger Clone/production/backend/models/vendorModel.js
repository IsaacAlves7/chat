// vendor user Model
// ❤️ Relationship with client Model
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
    region: {
        type: String,
        required: true 
    },
    vendorRegistry: {
      type : String,
      required : true
    },
    sellerCall: {
        type: String,
        required: true 
    },
    products: {
        type: String,
        required: true 
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