const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function signup(req, res){
    //user model utilized for data modeling
    const user = new User(req.body);
    try {//saves user info/account
        await user.save();
        const token= createJWT(user);
        res.json({ token });
    } catch(err){
        res.status(400).json(err)
    }
}
async function login(req, res){

}


//Helper Function
function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn:'1y'}
    )   
}

function login (){

}

function logout(){

}

module.export = {
    signup
};