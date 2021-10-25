const Router = require('express');
const router = new Router();

const basketRouter = require('./basketRouter');
const brandRouter = require('./brandRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');


router.use('/user', userRouter );
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);

module.exports = router;