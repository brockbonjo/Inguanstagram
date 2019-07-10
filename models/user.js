const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
    name: {String, unique: true},
    email: {String, required:true, lowercase: true, unique: true},
    password:String
}, {
    timestamps:true
});

userSchema.pre('save', function(next) {
    const user= this;
})
module.exports = mongoose.module('User', userSchema)