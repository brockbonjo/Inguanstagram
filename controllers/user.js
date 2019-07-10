const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: ''}
    )   
}