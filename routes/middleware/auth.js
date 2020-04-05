const Sequelize = require('sequelize');
const jwt = require('jwt-simple')

exports.checkToken = (req,res,next) => {
    if(!req.headers['user_token']){
      return res.json({
        error:"you must include the header"
      });
    }
    const token = req.headers['user_token']
    let payload = null
    try {
      payload = jwt.decode(token,process.env.TOKEN_KEY)
    } catch (err){
      return res.json({
        error : 'invalid token'
      });
    };
    console.log(payload)
    req.userId = payload.email;
  
    next();
  
  };