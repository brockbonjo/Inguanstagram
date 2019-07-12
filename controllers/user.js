const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = {
    signup,
    login
};

async function signup(req, res){
    //user model utilized for data modeling
    console.log(req.body)
    const user = new User(req.body);
    try {//saves user info/account
        await user.save();
        const token = createJWT(user);
        res.json({ token });
    } catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
async function login(req, res) {
    try {
      const user = await User.findOne({email: req.body.email});
      if (!user) return res.status(401).json({err: 'bad credentials'});
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({token});
        } else {
          return res.status(401).json({err: 'bad credentials'});
        }
      });
    } catch (err) {
      return res.status(401).json(err);
    }
  }


//but where is logout
//Helper Function
function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn:'1y'}
    )   
}