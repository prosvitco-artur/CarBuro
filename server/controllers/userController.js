const ApiError = require('../error/ApiError');

class UserController{
    async registration(req, res){

    }
    async login(req, res){

    }
    async auth(req, res, next){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('You need ID'));
        }
        res.json({message: "good"})
    }
    async delete(req, res){

    }
}

module.exports = new UserController();