const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        default: '',
        required: true
    },
    email: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);