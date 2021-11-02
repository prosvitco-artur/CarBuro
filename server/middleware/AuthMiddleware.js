const config = require('config'); 
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    if(req.method === "OPTIONS"){
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Barear asdasdqwe
        if(!token){
            res.status(401).json({message:"not authx test2"});
        }
    
        const decoded = jwt.verify(token, config.get("jwtSecretKey"));

        req.user = decoded;
        next();


    } catch (error) {
        res.status(401).json({message:"not authx test"});
    }
}