const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController')

router.post('/', productController.create);
router.delete('/', productController.delete);
router.get('/', productController.getAll);
router.get('/:id', productController.get);

module.exports = router;