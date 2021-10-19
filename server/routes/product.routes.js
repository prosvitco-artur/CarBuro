const { Router } = require('express');


const router = Router();


// /api/auth
router.get(
    '/:id',
    async (request, response) => {
        try {
            response.json({ message: 'Working' })
            console.log(e);
        } catch (e) {
            response.status(500).json({ message: 'Some Error' })
            console.log(e);
        }
    });
router.get(
    '/',
    async (request, response) => {
        try {
            response.json({ message: 'Working' })
            console.log(e);
        } catch (e) {
            response.status(500).json({ message: 'Some Error' })
            console.log(e);
        }
    });

    router.post(
        '/',
        async (request, response) => {
            try {
                response.json({ message: 'Working' })
                console.log(e);
            } catch (e) {
                response.status(500).json({ message: 'Some Error' })
                console.log(e);
            }
        });


module.exports = router;