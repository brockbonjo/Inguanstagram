const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
    username:{
        String,
        unique:true
        
    },
    name: {
        String,
        minlength:3, 
        unique: true
    },
    email: {
        String, 
        required:true, 
        lowercase: true, 
        unique: true
    },
    password:{
        String, 
        required:true,
        minlength:8
    }
}, {
    timestamps:true
    }
);

userSchema.pre('save', function(next) {
    const user= this;
    if(!user.isModified('password')) return next();
    bcrypu.hash(user.password, SALT_ROUNDS, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, cb){
    bycrypt.compare(tryPassword, this.password, function(err, isMatches){
        if(err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = mongoose.model('User', userSchema)