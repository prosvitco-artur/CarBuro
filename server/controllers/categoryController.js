const { Category } = require("../models/models");
const ApiError = require('../error/ApiError');
const { Op } = require("sequelize");
const uuid = require('uuid');
const path = require('path');

class CategoryController {
    async create(req, res) {
        const { name, parentId = null, brandId } = req.body;
        let hierarchyLevel;
        if (parentId) {
            const parent = await Category.findOne({ where: { id: parentId } });
            hierarchyLevel = parent.hierarchyLevel + 1;
        } else {
            hierarchyLevel = 1;
        }
        const { img } = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const category = await Category.create({ name, hierarchyLevel, parentId, img: fileName, brandId })
        return res.json({ category });
    }

    async getAll(req, res) {
        const category = await Category.findAll({hierarchy: true});
        return res.json({ category });
    }
    async getParent(req, res) {
        let category;
        if (req.query.parentId) {
            category = await Category.findAll({ where: { parentId: req.query.parentId } });
        } else {
            category = await Category.findAll({ where: { [Op.or]: [{hierarchyLevel: 1}, {hierarchyLevel: 2}] }, hierarchy: true });
        }
        return res.json({ category });
    }
    async delete(req, res) {
        const { name } = req.body;
        const category = await Category.destroy({ where: { name } });
        return res.json({ category });
    }
}

module.exports = new CategoryController();