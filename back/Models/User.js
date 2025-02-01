const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required:false,
    },
    email: {
        type: String,
        required: true,
        uqique: true,
    },
    password: {
        type: String,
        required: true,
    },

});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;