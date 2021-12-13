const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const config = require('config');
const { User, Basket } = require('../models/models');
const ApiError = require('../error/ApiError');

const genereteJwt = (id, email, role) => {
    return jsonwebtoken.sign(
        { id, email, role },
        config.get('jwtSecretKey'),
        { expiresIn: '24h' }
    );
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("encorrect data"));
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest("Has user"));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword });
        const basket = await Basket.create({ userId: user.id });
        const token = genereteJwt(user.id, email, user.role);
        return res.json({ token })
    }
    async login(req, res, next) {
        const { email, password } = req.body;


        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.json({ user })
            return next(ApiError.internal("Not found"));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal(password + " " + " " + user.password));
        }
        const token = genereteJwt(user.id, user.email, user.role);

        return res.json({ token, role: user.role })
    }
    async auth(req, res, next) {
        const token = genereteJwt(req.user.id, req.user.email, req.user.role);
        res.json({ token })
    }
    async delete(req, res) {

    }
}

module.exports = new UserController();