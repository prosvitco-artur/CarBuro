const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');


const router = Router();


// /api/auth
router.post(
    '/register',
    [
        check('email', 'Email is wrong').isEmail(),
        check('password', 'Min is 6').isLength({ min: 6 })
    ],

    async (request, response) => {
        try {
            const errors = validationResult(request);

            if (!errors.isEmpty()) {
                return response.status(400).json({
                    errors: errors.array(),
                    message: 'Some Wrong in register'
                })
            }
            const { email, password } = request.body;

            const candidate = await User.findOne({ email: email })

            if (candidate) {
                return response.status(400).json({ message: 'User is has' });
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const user = new User({
                email, password: hashedPassword
            });

            await user.save();

            response.status(500).json({ message: 'User is created' })

        } catch (e) {
            response.status(500).json({ message: 'Some Error', e })
            console.log(e);
        }
    });
router.post(
    '/login',
    [
        check('email', 'Email must be').normalizeEmail().isEmail(),
        check('password', 'Must be exist').exists()
    ],

    async (request, response) => {
        try {
            const errors = validationResult(request);

            if (!errors.isEmpty()) {
                return response.status(400).json({
                    errors: errors.array(),
                    message: 'Some Wrong in login'
                })
            }
            const { email, password } = request.body;

            const user = await User.findOne({ email: email })

            if (!user) {
                return response.status(400).json({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return response.status(400).json({message: 'Password is wrong'});
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )
            response.json({token, userId: user.id})
        } catch (e) {
            response.status(500).json({ message: 'Some Error', e })
            console.log(e);
        }
    });

router.get(
    '/check',
    async (request, response) => {
        try {
            
            response.json(request)


        } catch (e) {
            response.status(500).json({ message: 'Some Error' })
            console.log(e);
        }
    });


module.exports = router;