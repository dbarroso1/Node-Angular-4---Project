const mongoose = require('mongoose'), Schema = mongoose.Schema;

const PasswordSchema = new Schema({
    author:  String,
    lable: {
        type: String,
        required: [true, 'ERR: Lable is Required']
    },
    password: {
        type: String,
        required: [true, 'ERR: Password is Required']
    }
});

const Password = mongoose.model('password', PasswordSchema);
module.exports = Password;