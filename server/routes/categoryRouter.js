const Router = require('express');
const router = new Router();
const categoryController = require('./../controllers/categoryController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), categoryController.create);
router.delete('/', checkRole('ADMIN'), categoryController.delete );
router.get('/', categoryController.getAll);
router.get('/parent', categoryController.getParent);

module.exports = router;